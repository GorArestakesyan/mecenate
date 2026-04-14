import { StyleSheet } from "react-native";
import { Colors, Spacing, Typography } from "@constants";

export const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.sm,
    paddingTop: Spacing.md,
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.lg,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.surface,
  },
  name: {
    ...Typography.authorName,
    color: Colors.textStrongSecondary,
    flex: 1,
  },
});
