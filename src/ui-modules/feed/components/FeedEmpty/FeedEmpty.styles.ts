import { StyleSheet } from "react-native";
import { Colors, Spacing, Typography } from "@constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.xxxl,
  },
  illustration: {
    marginBottom: Spacing.xl,
  },
  text: {
    ...Typography.postTitle,
    color: Colors.textStrong,
    textAlign: "center",
    marginBottom: Spacing.xl,
  },
  button: {
    width: "100%",
  },
});
