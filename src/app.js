import { RequestsApi } from './api/requests';

(async function app() {
  const response = await RequestsApi.getCashIn();
  console.log(response);
})();
