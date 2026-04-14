import { StyleSheet } from "react-native";
import { Colors, Typography, Spacing } from "@constants";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    gap: Spacing.sm,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.surface,
    flexShrink: 0,
  },
  content: {
    flex: 1,
    gap: 2,
  },
  username: {
    ...Typography.labelMd,
    fontFamily: "Manrope_700Bold",
    color: Colors.textStrong,
  },
  text: {
    ...Typography.body,
    color: Colors.textDefault,
  },
});
