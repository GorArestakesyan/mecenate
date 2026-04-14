import React from "react";
import { LoadingIndicator } from "@ui-kit";
import { styles } from "./FeedFooter.styles";

interface IFeedFooterProps {
  visible: boolean;
}

const FeedFooter = ({ visible }: IFeedFooterProps) => {
  if (!visible) return null;
  return <LoadingIndicator style={styles.container} />;
};

export default FeedFooter;
