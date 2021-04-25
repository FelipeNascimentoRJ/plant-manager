import axios, { AxiosInstance, AxiosResponse } from 'axios';

import Constants from '../utils/constants';
export interface PlantEnvironment {
  key: string;
  title: string;
}

export interface Plant {
  id: number;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: Array<string>;
  frequency: {
    times: number;
    repeat_every: string;
  };
  hour: string;
  dateTimeNotification: string;
}

class Api {
  private instance: AxiosInstance;

  constructor () {
    this.instance = axios.create({
      baseURL: `http://${Constants.SERVER_HOST}:${Constants.SERVER_POST}`,
    });
  }

  async getPlantsEnvironments (): Promise<AxiosResponse<Array<PlantEnvironment>>> {
    return this.instance.get('/plants_environments?_sort=title&_order=asc');
  }

  async getPlants (page: number): Promise<AxiosResponse<Array<Plant>>> {
    return this.instance.get(`/plants?_sort=name&_order=asc&_page=${page}&_limit=8`);
  }
}

export default new Api();