import fs from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const oldFile = path.join(__dirname, "files", "wrongFilename.txt");
  const newFIle = path.join(__dirname, "files", "properFilename.md");

  try {
    try {
      await fs.access(newFIle);
      throw new Error("FS operation failed: Destination file already exists");
    } catch (e) {
      if (e.code === "ENOENT") {
        await fs.rename(oldFile, newFIle);
      } else {
        throw e;
      }
    }
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await rename();
