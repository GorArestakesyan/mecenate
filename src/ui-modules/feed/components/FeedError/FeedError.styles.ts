import { StyleSheet } from "react-native";
import { Colors, Spacing, Typography } from "@constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: Spacing.xxxl,
  },
  illustration: {
    marginBottom: Spacing.xl,
  },
  title: {
    ...Typography.postPreview,
    color: Colors.textDefault,
    textAlign: "center",
    marginBottom: Spacing.xl,
  },
  button: {
    minWidth: 160,
  },
});
