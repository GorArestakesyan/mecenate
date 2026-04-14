import { AxiosService } from "./implementations/AxiosService";
import { ApiService } from "./implementations/ApiService";
import { WsService } from "./implementations/WsService";
import { Config } from "../config/env";

const WS_BASE_URL = Config.API_BASE_URL.replace(/^http/, "ws");

export class AppServicesContainer {
  readonly axiosService: AxiosService;
  readonly apiService: ApiService;
  readonly wsService: WsService;

  constructor() {
    this.axiosService = new AxiosService();
    this.apiService = new ApiService(this.axiosService);
    this.wsService = new WsService(WS_BASE_URL, Config.API_USER_ID);
  }
}
