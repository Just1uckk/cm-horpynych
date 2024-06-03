"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseJsonFile = void 0;
const fs = require("fs");
const util_1 = require("util");
const readFile = (0, util_1.promisify)(fs.readFile);
function parseJsonFile(path) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!path)
            throw new Error('File path not found.');
        if (!fs.existsSync(path)) {
            throw new Error(`File '${path}' does not exist!`);
        }
        const data = yield readFile(path, 'utf-8');
        const jsonData = JSON.parse(data);
        if (!jsonData || jsonData.length === 0) {
            throw new Error('File is empty or invalid JSON data.');
        }
        return jsonData;
    });
}
exports.parseJsonFile = parseJsonFile;
