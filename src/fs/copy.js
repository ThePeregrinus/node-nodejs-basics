import fs from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const oldDirectoryPath = path.join(__dirname, "files");
  const newDirectoryPath = path.join(__dirname, "files_copy");

  try {
    try {
      await fs.access(newDirectoryPath);
      throw new Error("FS operation failed");
    } catch (e) {
      if (e.code !== "ENOENT") throw e;
      await fs.access(oldDirectoryPath);
    }

    const reccursiveFunc = async (oldPath, newPath) => {
      const files = await fs.readdir(oldPath, "utf8");
      await fs.mkdir(newPath);

      files.forEach(async (file) => {
        const pathToOldFile = path.join(oldPath, file);
        const pathToNewFile = path.join(newPath, file);

        const stat = await fs.stat(pathToOldFile);
        if (stat.isDirectory(pathToOldFile, file))
          reccursiveFunc(pathToOldFile, pathToNewFile);
        else fs.writeFile(pathToNewFile, file);
      });
    };

    reccursiveFunc(oldDirectoryPath, newDirectoryPath);
  } catch {
    throw new Error("FS operation failed");
  }
};

await copy();
