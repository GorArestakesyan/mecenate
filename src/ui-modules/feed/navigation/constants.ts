import type { TFeedTabParamList } from "./types";

export interface IFeedTabConfig {
  readonly name: keyof TFeedTabParamList;
  readonly title: string;
}

export const FEED_TABS: readonly IFeedTabConfig[] = [
  { name: "All", title: "Все" },
  { name: "Free", title: "Бесплатные" },
  { name: "Paid", title: "Платные" },
] as const;
