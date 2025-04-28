import fs from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const directory = path.join(__dirname, "files", "fresh.txt");

  const content = "I am fresh and young";

  try {
    await fs.writeFile(directory, content, { flag: "ax" });
  } catch (err) {
    throw new Error(err);
  }
};

await create();
