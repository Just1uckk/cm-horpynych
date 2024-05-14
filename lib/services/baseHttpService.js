"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseHttpServices = void 0;
var _axios = require("../config/axios");
class BaseHttpServices {
  getErrorMessage(message) {
    return message;
  }
  onResponse(response, showErrorMessage = true) {
    if (response.status !== 200) {
      if (showErrorMessage) {
        console.log(`Api return error status code ${response.status}. `);
      }
      return response;
    }
  }
  async get(url, config, showErrorMessage) {
    const response = await _axios.axios.get(url, config);
    this.onResponse(response, showErrorMessage);
    return response;
  }
  async post(url, data, config, showErrorMessage) {
    const response = await _axios.axios.post(url, data, config);
    this.onResponse(response, showErrorMessage);
    return response;
  }
  async put(url, data, config, showErrorMessage) {
    const response = await _axios.axios.put(url, data, config);
    this.onResponse(response, showErrorMessage);
    return response;
  }
  async delete(url, config, showErrorMessage) {
    const response = await _axios.axios.delete(url, config);
    this.onResponse(response, showErrorMessage);
    return response;
  }
}
exports.BaseHttpServices = BaseHttpServices;