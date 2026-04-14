import { APP_ENV, API_BASE_URL, API_USER_ID } from "@env";

export const Config = {
  APP_ENV,
  API_BASE_URL,
  API_USER_ID,
  IS_DEV: APP_ENV === "development",
} as const;
