"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.axios = void 0;
var _axios = _interopRequireDefault(require("axios"));
var _variables = require("./variables");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const axiosInstance = _axios.default.create({
  baseURL: _variables.API_BASE_URL
});
axiosInstance.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});
const axios = exports.axios = axiosInstance;