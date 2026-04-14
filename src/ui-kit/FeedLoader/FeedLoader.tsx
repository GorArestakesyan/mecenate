import React from "react";
import { LoadingIndicator } from "../LoadingIndicator";
import { styles } from "./FeedLoader.styles";

export interface FeedLoaderProps {
  visible: boolean;
}

export const FeedLoader: React.FC<FeedLoaderProps> = ({ visible }) => {
  if (!visible) return null;
  return <LoadingIndicator size="large" style={styles.container} />;
};
