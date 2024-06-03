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
exports.BaseHttpServices = void 0;
const axios_1 = require("../config/axios");
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
    get(url_1, config_1) {
        return __awaiter(this, arguments, void 0, function* (url, config, showErrorMessage = true) {
            const response = yield axios_1.axios.get(url, config);
            this.onResponse(response, showErrorMessage);
            return response;
        });
    }
    post(url_1, data_1, config_1) {
        return __awaiter(this, arguments, void 0, function* (url, data, config, showErrorMessage = true) {
            const response = yield axios_1.axios.post(url, data, config);
            this.onResponse(response, showErrorMessage);
            return response;
        });
    }
    put(url_1, data_1, config_1) {
        return __awaiter(this, arguments, void 0, function* (url, data, config, showErrorMessage = true) {
            const response = yield axios_1.axios.put(url, data, config);
            this.onResponse(response, showErrorMessage);
            return response;
        });
    }
    delete(url_1, config_1) {
        return __awaiter(this, arguments, void 0, function* (url, config, showErrorMessage = true) {
            const response = yield axios_1.axios.delete(url, config);
            this.onResponse(response, showErrorMessage);
            return response;
        });
    }
}
exports.BaseHttpServices = BaseHttpServices;
