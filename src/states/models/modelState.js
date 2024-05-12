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

export const ModelState = new Model();
