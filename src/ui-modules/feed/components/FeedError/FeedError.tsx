import React from "react";
import { Text, View } from "react-native";
import { Button } from "@ui-kit";
import { LoadingErrorIllustration } from "@images";
import { styles } from "./FeedError.styles";

interface IFeedErrorProps {
  onRetry: () => void;
}

const FeedError = ({ onRetry }: IFeedErrorProps) => (
  <View style={styles.container}>
    <LoadingErrorIllustration width={120} height={120} style={styles.illustration} />
    <Text style={styles.title}>Не удалось загрузить публикации</Text>
    <Button label="Повторить" onPress={onRetry} fullWidth={false} style={styles.button} />
  </View>
);

export default FeedError;
