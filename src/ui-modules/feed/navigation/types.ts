import type { MaterialTopTabScreenProps } from "@react-navigation/material-top-tabs";

export type TFeedTabParamList = {
  All: undefined;
  Free: undefined;
  Paid: undefined;
};

export type TFeedTabScreenProps<T extends keyof TFeedTabParamList> = MaterialTopTabScreenProps<
  TFeedTabParamList,
  T
>;

export type FeedTier = "free" | "paid";
