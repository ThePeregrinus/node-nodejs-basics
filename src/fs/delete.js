import fs from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const directory = path.join(__dirname, "files", "fileToRemove.txt");

  try {
    await fs.rm(directory);
  } catch {
    throw new Error("FS operation failed");
  }
};

await remove();
