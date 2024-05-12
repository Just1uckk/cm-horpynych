"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RequestsApiService = exports.RequestsApi = void 0;
var _baseHttpService = require("../services/baseHttpService");
class RequestsApiService {
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
exports.RequestsApiService = RequestsApiService;
const RequestsApi = exports.RequestsApi = new RequestsApiService(new _baseHttpService.BaseHttpServices());