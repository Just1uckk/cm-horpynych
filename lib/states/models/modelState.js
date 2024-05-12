"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelState = void 0;
class Model {
  constructor() {
    this.models = {};
  }
  set(type, data) {
    this.models[type] = data;
  }
  get(type) {
    return this.models[type];
  }
}
const ModelState = exports.ModelState = new Model();