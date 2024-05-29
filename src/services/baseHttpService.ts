import { axios } from '../config/axios';

export class BaseHttpServices {
  getErrorMessage(message) {
    return message;
  }

  onResponse(response, showErrorMessage = true) {
    if (response.status !== 200) {
      if (showErrorMessage) {
        console.log(`Api return error status code ${response.status}. `);
      }

      return response;
    }
  }

  async get(url, config, showErrorMessage) {
    const response = await axios.get(url, config);
    this.onResponse(response, showErrorMessage);

    return response;
  }

  async post(url, data, config, showErrorMessage) {
    const response = await axios.post(url, data, config);
    this.onResponse(response, showErrorMessage);

    return response;
  }

  async put(url, data, config, showErrorMessage) {
    const response = await axios.put(url, data, config);
    this.onResponse(response, showErrorMessage);

    return response;
  }

  async delete(url, config, showErrorMessage) {
    const response = await axios.delete(url, config);
    this.onResponse(response, showErrorMessage);

    return response;
  }
}
