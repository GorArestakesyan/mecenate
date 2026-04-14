import React from "react";
import { ActivityIndicator, ViewStyle } from "react-native";
import { Colors } from "../../constants/theme/colors";

export interface LoadingIndicatorProps {
  style?: ViewStyle;
  size?: "small" | "large";
}

export const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ style, size = "small" }) => (
  <ActivityIndicator color={Colors.brand} size={size} style={style} />
);
