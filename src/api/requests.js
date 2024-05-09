import { BaseHttpServices } from '../services/baseHttpService';

export class RequestsApiService {
  constructor(httpService) {
    this.http = httpService;
  }

  getCashIn = async () => {
    const payload = await this.http.get('/cash-in');

    return payload.data;
  };
}

export const RequestsApi = new RequestsApiService(new BaseHttpServices());
