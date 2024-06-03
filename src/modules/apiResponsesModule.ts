import { Api  } from '../api/api';
import { COMMISION_TYPE } from '../constants/constants';
import { ModelState } from '../states/models/modelState';

export async function getComissionFeesModule(): Promise<void> {
  try {
    const modelsName: { [key: number]: string } = {
      0: COMMISION_TYPE.cashInNatural,
      1: COMMISION_TYPE.cashOutNatural,
      2: COMMISION_TYPE.cashOutJuridical,
    };

    const commisionsData = await Promise.all([
      Api.getCashIn(),
      Api.getCashOutNatural(),
      Api.getCashOutJuridical(),
    ]);

    commisionsData.forEach((data, index) => ModelState.set(modelsName[index], data));
  } catch (e) {
    console.log('Something went wrong with getting models (ModelAction).');
  }
}
