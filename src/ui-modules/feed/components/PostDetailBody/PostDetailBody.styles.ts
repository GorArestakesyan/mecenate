import { StyleSheet } from "react-native";
import { Colors, Spacing } from "@constants";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  body: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    paddingBottom: Spacing.md,
    gap: Spacing.md,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.surface,
    marginHorizontal: Spacing.lg,
  },
  commentsHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
  },
  commentsCount: {
    fontFamily: "Manrope_600SemiBold",
    fontSize: 15,
    lineHeight: 20,
    color: Colors.textStrong,
  },
});
