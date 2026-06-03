import { spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";

const require = createRequire(import.meta.url);

function fail(message) {
  console.error("");
  console.error("[Corexa desktop] Electron runtime is not installed correctly.");
  console.error(message);
  console.error("");
  console.error("Repair steps:");
  console.error("1. pnpm --filter @corexa/desktop run repair:electron");
  console.error(
    "2. If that fails, ensure install scripts are enabled: pnpm config set ignore-scripts false",
  );
  console.error("3. Reinstall workspace dependencies: pnpm install");
  console.error("");
  process.exit(1);
}

function inspectElectronRuntime(electronPackageDir) {
  const pathFile = path.join(electronPackageDir, "path.txt");

  if (!existsSync(pathFile)) {
    return {
      message:
        "Electron package metadata exists, but the downloaded binary marker file path.txt is missing.",
      ok: false,
    };
  }

  const executableRelativePath = readFileSync(pathFile, "utf8").trim();

  if (!executableRelativePath) {
    return {
      message: "Electron path.txt is empty, so the runtime executable cannot be located.",
      ok: false,
    };
  }

  const executablePath = path.join(electronPackageDir, "dist", executableRelativePath);

  if (!existsSync(executablePath)) {
    return {
      message: `Electron expected a runtime executable at ${executablePath}, but it was not found.`,
      ok: false,
    };
  }

  return { ok: true };
}

function attemptRepair(electronPackageDir, reason) {
  const installScript = path.join(electronPackageDir, "install.js");

  if (!existsSync(installScript)) {
    return {
      message: `Automatic repair could not start because ${installScript} does not exist.`,
      ok: false,
    };
  }

  console.warn("");
  console.warn("[Corexa desktop] Electron runtime is incomplete.");
  console.warn(`[Corexa desktop] ${reason}`);
  console.warn("[Corexa desktop] Attempting an automatic Electron repair...");
  console.warn("");

  const result = spawnSync(process.execPath, [installScript], {
    cwd: electronPackageDir,
    stdio: "inherit",
  });

  if (result.error) {
    return {
      message: `Automatic Electron repair failed to start: ${result.error.message}`,
      ok: false,
    };
  }

  if (result.status !== 0) {
    return {
      message: `Automatic Electron repair exited with status ${result.status ?? "unknown"}.`,
      ok: false,
    };
  }

  return { ok: true };
}

let electronPackageDir;

try {
  electronPackageDir = path.dirname(require.resolve("electron/package.json"));
} catch {
  fail("The electron package could not be resolved from apps/desktop/node_modules.");
}

let runtimeState = inspectElectronRuntime(electronPackageDir);

if (!runtimeState.ok) {
  const repairResult = attemptRepair(electronPackageDir, runtimeState.message);

  if (!repairResult.ok) {
    fail(repairResult.message);
  }

  runtimeState = inspectElectronRuntime(electronPackageDir);

  if (!runtimeState.ok) {
    fail(`Automatic repair completed, but Electron is still incomplete. ${runtimeState.message}`);
  }
}
