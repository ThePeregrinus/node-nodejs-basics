import fs from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const oldDirectoryPath = path.join(__dirname, "files");
  const newDirectoryPath = path.join(__dirname, "files_copy");

  const reccursiveFunc = async (oldPath, newPath) => {
    const files = await fs.readdir(oldPath, "utf8");
    await fs.mkdir(newPath);

    files.forEach((file) => {
      fs.writeFile(path.join(newPath, file), file);
    });

    console.log(files);
  };

  try {
    reccursiveFunc(oldDirectoryPath, newDirectoryPath);
  } catch {
    throw new Error("FS operation failed");
  }
};

await copy();
