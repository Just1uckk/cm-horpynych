import * as fs from 'fs';
import { promisify } from 'util';
import { OPERATION_TYPE } from '../constants/constants';

const readFile = promisify(fs.readFile);

export type inputDataDto = {
  date: Date,
  user_id: number,
  user_type: 'natural' | 'juridical',
  type: keyof typeof OPERATION_TYPE,
  operation: {
    amount: number,
    currency: string
  }
}

export async function parseJsonFile(path: string): Promise<inputDataDto[]> {
  if (!path) throw new Error('File path not found.');
  if (!fs.existsSync(path)) {
    throw new Error(`File '${path}' does not exist!`);
  }
  const data: string = await readFile(path, 'utf-8');
  const jsonData: inputDataDto[] = JSON.parse(data);
  if (!jsonData || jsonData.length === 0) {
    throw new Error('File is empty or invalid JSON data.');
  }
  return jsonData;
}
