import fs from "fs";
import path from "path";
import { pipeline } from "stream/promises";

const read = async () => {
  const dirname = import.meta.dirname;
  const filePath = path.join(dirname, "files", "fileToRead.txt");

  await pipeline(fs.createReadStream(filePath), process.stdout);
};

await read();
