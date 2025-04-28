import fs from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const directory = path.join(__dirname, "files");

  try {
    const files = await fs.readdir(directory, "utf8");

    console.log(files);
  } catch {
    throw new Error("FS operation failed");
  }
};

await list();
