import axios, { AxiosInstance } from "axios";
import { Config } from "../../config/env";

export class AxiosService {
  readonly client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: Config.API_BASE_URL,
      headers: {
        Authorization: `Bearer ${Config.API_USER_ID}`,
        "Content-Type": "application/json",
      },
      timeout: 10_000,
    });
  }
}
