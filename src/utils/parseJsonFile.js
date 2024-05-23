import fs from 'fs';
import { promisify } from 'util';

const readFile = promisify(fs.readFile);

export async function parseJsonFile(path) {
  if (!path) throw new Error('File path not found.');
  if (!fs.existsSync(path)) {
    throw new Error(`File '${path}' does not exist!`);
  }
  const data = await readFile(path);
  const jsonData = JSON.parse(data);
  if (!jsonData || jsonData.length === 0) {
    throw new Error('File is empty or invalid JSON data.');
  }
  return jsonData;
}
