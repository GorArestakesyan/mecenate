import React from "react";
import { TFeedTabScreenProps } from "@navigation/types";
import { FeedContent } from "@ui-modules/feed";

export const FeedAllScreen: React.FC<TFeedTabScreenProps<"All">> = () => <FeedContent />;

export const FeedFreeScreen: React.FC<TFeedTabScreenProps<"Free">> = ({ navigation }) => (
  <FeedContent tier="free" onHomePress={() => navigation.navigate("All")} />
);

export const FeedPaidScreen: React.FC<TFeedTabScreenProps<"Paid">> = ({ navigation }) => (
  <FeedContent tier="paid" onHomePress={() => navigation.navigate("All")} />
);
