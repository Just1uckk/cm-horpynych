import { calculateUserCommission } from './modules/calculateUserCommission';
import { ModelAction } from './states/models/modelAction';
import { jsonParseUtil } from './utils/jsonParseUtil';

(async function app() {
  await ModelAction();
  //Add module structure
  const inputData = await jsonParseUtil(process.argv[2]);
  calculateUserCommission(inputData);
})();
