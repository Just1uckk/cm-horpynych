import { BaseHttpServiceDto, BaseHttpServices } from '../services/baseHttpService';

export interface getCashInDto {
  percents: number,
  max: {
    amount: number,
    currency: string,
  }
}

export interface getCashOutNaturalDto {
  percents: number,
  week_limit: {
    amount: number,
    currency: string,
  }
}

export interface getCashOutJuridicalDto {
  percents: number,
  min: {
    amount: number,
    currency: string,
  }
}

export class ApiService  {
  private http: BaseHttpServiceDto;

  constructor(httpService: BaseHttpServiceDto) {
    this.http = httpService;
  }

  getCashIn = async (): Promise<getCashInDto> => {
    const payload = await this.http.get('/cash-in');

    return payload.data;
  };

  getCashOutNatural = async (): Promise<getCashOutNaturalDto> => {
    const payload = await this.http.get('/cash-out-natural');

    return payload.data;
  };

  getCashOutJuridical = async (): Promise<getCashOutJuridicalDto> => {
    const payload = await this.http.get('/cash-out-juridical');

    return payload.data;
  };
}

export const Api = new ApiService(new BaseHttpServices());
