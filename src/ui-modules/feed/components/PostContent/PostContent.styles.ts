import { StyleSheet } from "react-native";
import { Colors, Spacing, Typography } from "@constants";

export const styles = StyleSheet.create({
  container: {
    gap: Spacing.xs,
  },
  title: {
    ...Typography.postTitle,
    color: Colors.textStrong,
  },
  measureText: {
    position: "absolute",
    opacity: 0,
    zIndex: -1,
  },
  preview: {
    ...Typography.postPreview,
    color: Colors.textDefault,
  },
});
