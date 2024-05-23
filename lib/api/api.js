"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApiService = exports.Api = void 0;
var _baseHttpService = require("../services/baseHttpService");
class ApiService {
  constructor(httpService) {
    this.http = httpService;
  }
  getCashIn = async () => {
    const payload = await this.http.get('/cash-in');
    return payload.data;
  };
  getCashOutNatural = async () => {
    const payload = await this.http.get('/cash-out-natural');
    return payload.data;
  };
  getCashOutJuridical = async () => {
    const payload = await this.http.get('/cash-out-juridical');
    return payload.data;
  };
}
exports.ApiService = ApiService;
const Api = exports.Api = new ApiService(new _baseHttpService.BaseHttpServices());