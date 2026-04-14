import { IFeedTabConfig } from "@navigation/types";

export const Routes = {
  FEED: "Feed",
} as const;

export const FEED_TABS: readonly IFeedTabConfig[] = [
  { name: "All", title: "Все" },
  { name: "Free", title: "Бесплатные" },
  { name: "Paid", title: "Платные" },
] as const;
