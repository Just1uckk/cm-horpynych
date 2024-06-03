import { getComissionFeesModule } from './modules/apiResponsesModule';
import { calculateUserCommissionModule, commissionDto } from './modules/calculateUserCommissionModule';
import { outputInConsoleModule } from './modules/outputInConsoleModule';

(async function app() {
  await getComissionFeesModule();
  const commission: commissionDto[] = await calculateUserCommissionModule();
  outputInConsoleModule(commission);
})();
