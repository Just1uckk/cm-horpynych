import { getComissionFeesModule } from './modules/apiResponsesModule';
import { calculateUserCommissionModule } from './modules/calculateUserCommissionModule';

(async function app() {
  await getComissionFeesModule();
  await calculateUserCommissionModule();
})();
