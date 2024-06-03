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
exports.Api = exports.ApiService = void 0;
const baseHttpService_1 = require("../services/baseHttpService");
class ApiService {
    constructor(httpService) {
        this.getCashIn = () => __awaiter(this, void 0, void 0, function* () {
            const payload = yield this.http.get('/cash-in');
            return payload.data;
        });
        this.getCashOutNatural = () => __awaiter(this, void 0, void 0, function* () {
            const payload = yield this.http.get('/cash-out-natural');
            return payload.data;
        });
        this.getCashOutJuridical = () => __awaiter(this, void 0, void 0, function* () {
            const payload = yield this.http.get('/cash-out-juridical');
            return payload.data;
        });
        this.http = httpService;
    }
}
exports.ApiService = ApiService;
exports.Api = new ApiService(new baseHttpService_1.BaseHttpServices());
