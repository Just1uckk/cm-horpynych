import { getCashInDto, getCashOutJuridicalDto, getCashOutNaturalDto } from "../../api/api";

class Model {
  private models: { [key: string]: getCashInDto | getCashOutJuridicalDto | getCashOutNaturalDto };

  constructor() {
    this.models = {};
  }

  set(type: string, data: getCashInDto | getCashOutJuridicalDto | getCashOutNaturalDto) {
    this.models[type] = data;
  }

  get(type: string): getCashInDto | getCashOutJuridicalDto | getCashOutNaturalDto {
    return this.models[type];
  }
}

export const ModelState = new Model();
