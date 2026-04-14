import React from "react";
import { Text, View } from "react-native";
import { Button } from "@ui-kit";
import { styles } from "./FeedEmpty.styles";
import { LoadingErrorIllustration } from "@images";

interface IFeedEmptyProps {
  visible?: boolean;
  onHomePress?: () => void;
}

const FeedEmpty = ({ visible = true, onHomePress }: IFeedEmptyProps) => {
  if (!visible) return null;

  return (
    <View style={styles.container}>
      <LoadingErrorIllustration width={160} height={200} style={styles.illustration} />
      <Text style={styles.text}>По вашему запросу ничего не найдено</Text>
      <Button label="На главную" onPress={onHomePress} fullWidth style={styles.button} />
    </View>
  );
};

export default FeedEmpty;
