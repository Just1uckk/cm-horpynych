"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.axios = void 0;
const axios_1 = require("axios");
const variables_1 = require("./variables");
const axiosInstance = axios_1.default.create({
    baseURL: variables_1.API_BASE_URL,
});
axiosInstance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});
exports.axios = axiosInstance;
