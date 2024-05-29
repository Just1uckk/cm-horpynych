import { axios } from '../config/axios';

export interface DefaultResponseDto {
  status: number;
  data?: any;
  message?: string;
}

export interface BaseHttpServiceDto {
  get(url: string, config?: any, showErrorMessage?: boolean): Promise<any>;
  post(
    url: string,
    data: any,
    config?: any,
    showErrorMessage?: boolean,
  ): Promise<any>;
  put(
    url: string,
    data: any,
    config?: any,
    showErrorMessage?: boolean,
  ): Promise<any>;
  delete(url: string, config?: any, showErrorMessage?: boolean): Promise<any>;
}

export class BaseHttpServices implements BaseHttpServiceDto {
  getErrorMessage(message: string): string {
    return message;
  }

  onResponse(response: DefaultResponseDto, showErrorMessage: boolean = true) {
    if (response.status !== 200) {
      if (showErrorMessage) {
        console.log(`Api return error status code ${response.status}. `);
      }

      return response;
    }
  }

  async get(url: string, config: any, showErrorMessage: boolean = true) {
    const response = await axios.get(url, config);
    this.onResponse(response, showErrorMessage);

    return response;
  }

  async post(
    url: string,
    data: any,
    config: any,
    showErrorMessage: boolean = true,
  ) {
    const response = await axios.post(url, data, config);
    this.onResponse(response, showErrorMessage);

    return response;
  }

  async put(
    url: string,
    data: any,
    config: any,
    showErrorMessage: boolean = true,
  ) {
    const response = await axios.put(url, data, config);
    this.onResponse(response, showErrorMessage);

    return response;
  }

  async delete(url: string, config: any, showErrorMessage: boolean = true) {
    const response = await axios.delete(url, config);
    this.onResponse(response, showErrorMessage);

    return response;
  }
}
