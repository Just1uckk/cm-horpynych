import * as fs from 'fs';
import { parseJsonFile } from '../../src/utils/parseJsonFile';
import { describe, expect, test } from '@jest/globals';

describe('ReadJsonFile.', () => {
  test('Throws an exception if file is not provided.', async () => {
    // @ts-ignore
    await expect(parseJsonFile()).rejects.toThrow('File path not found.');
  });

  test('Throws an exception if file does not exist.', async () => {
    await expect(parseJsonFile('invalid-file.json')).rejects.toThrow(
      "File 'invalid-file.json' does not exist!",
    );
  });

  test('Throws an exception if file is empty or invalid JSON data.', async () => {
    const filePath = 'invalid-json-file.json';
    const fileContent = '';

    fs.writeFileSync(filePath, fileContent);

    await expect(parseJsonFile(filePath)).rejects.toThrow(
      'Unexpected end of JSON input',
    );

    fs.unlinkSync(filePath);
  });

  test('Returns parsed JSON data.', async () => {
    const filePath = 'valid-json-file.json';
    const fileContent = '{"name": "John Doe", "age": 30}';

    fs.writeFileSync(filePath, fileContent);

    const expected = { name: 'John Doe', age: 30 };
    const actual = await parseJsonFile(filePath);

    expect(actual).toEqual(expected);

    fs.unlinkSync(filePath);
  });
});
