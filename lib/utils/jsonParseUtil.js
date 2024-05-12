"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jsonParseUtil = jsonParseUtil;
var _fs = _interopRequireDefault(require("fs"));
var _util = require("util");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const readFile = (0, _util.promisify)(_fs.default.readFile);
async function jsonParseUtil(path) {
  if (!path) throw new Error('File path not found.');
  if (!_fs.default.existsSync(path)) {
    throw new Error(`File '${path}' does not exist!`);
  }
  const data = await readFile(path);
  const jsonData = JSON.parse(data);
  if (!jsonData || jsonData.length === 0) {
    throw new Error('File is empty or invalid JSON data.');
  }
  return jsonData;
}