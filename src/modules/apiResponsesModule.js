import { RequestsApi } from '../api/requests';
import { COMMISION_TYPE } from '../constants/constants';
import { ModelState } from '../states/models/modelState';

export async function getComissionFeesModule() {
  try {
    const modelsName = {
      0: COMMISION_TYPE.cashInNatural,
      1: COMMISION_TYPE.cashOutNatural,
      2: COMMISION_TYPE.cashOutJuridical,
    };

    const commisionsData = await Promise.all([
      RequestsApi.getCashIn(),
      RequestsApi.getCashOutNatural(),
      RequestsApi.getCashOutJuridical(),
    ]);

    commisionsData.forEach((model, index) => ModelState.set(modelsName[index], model));
  } catch (e) {
    console.log('Something went wrong with getting models (ModelAction).');
  }
}
