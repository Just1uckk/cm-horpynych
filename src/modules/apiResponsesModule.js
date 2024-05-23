import { RequestsApi } from '../api/requests';
import { SITUATION_MODEL } from '../constants/constants';
import { ModelState } from '../states/models/modelState';

export async function getComissionFeesModule() {
  try {
    const modelsName = {
      0: SITUATION_MODEL.cashInNatural,
      1: SITUATION_MODEL.cashOutNatural,
      2: SITUATION_MODEL.cashOutJuridical,
    };

    const models = await Promise.all([
      RequestsApi.getCashIn(),
      RequestsApi.getCashOutNatural(),
      RequestsApi.getCashOutJuridical(),
    ]);

    models.forEach((model, index) => ModelState.set(modelsName[index], model));
  } catch (e) {
    console.log('Something went wrong with getting models (ModelAction).');
  }
}
