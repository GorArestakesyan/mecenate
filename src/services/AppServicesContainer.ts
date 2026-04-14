import { AxiosService } from "./implementations/AxiosService";
import { ApiService } from "./implementations/ApiService";

export class AppServicesContainer {
  readonly axiosService: AxiosService;
  readonly apiService: ApiService;

  constructor() {
    this.axiosService = new AxiosService();
    this.apiService = new ApiService(this.axiosService);
  }
}
