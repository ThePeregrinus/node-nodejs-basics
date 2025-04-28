import fs from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = path.join(__dirname, "files", "wrongFilename.txt");

  try {
    await fs.access(filePath);
    const data = await fs.readFile(filePath, "utf8");

    console.log(data);
  } catch {
    throw new Error("FS operation failed");
  }
};

await read();
