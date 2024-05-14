import { apiResponseModule } from './modules/apiResponsesModule';
import { calculateUserCommissionModule } from './modules/calculateUserCommissionModule';

(async function app() {
  await apiResponseModule();
  await calculateUserCommissionModule();
})();
