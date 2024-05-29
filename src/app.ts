import { getComissionFeesModule } from './modules/apiResponsesModule';
import { calculateUserCommissionModule } from './modules/calculateUserCommissionModule';
import { outputInConsoleModule } from './modules/outputInConsoleModule';

(async function app() {
  await getComissionFeesModule();
  const commission = await calculateUserCommissionModule();
  outputInConsoleModule(commission);
})();
