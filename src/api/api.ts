import { BaseHttpServices } from '../services/baseHttpService';

export class ApiService  {
  constructor(httpService) {
    this.http = httpService;
  }

  getCashIn = async () => {
    const payload = await this.http.get('/cash-in');

    return payload.data;
  };

  getCashOutNatural = async () => {
    const payload = await this.http.get('/cash-out-natural');

    return payload.data;
  };

  getCashOutJuridical = async () => {
    const payload = await this.http.get('/cash-out-juridical');

    return payload.data;
  };
}

export const Api = new ApiService(new BaseHttpServices());
