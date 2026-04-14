import { StyleSheet } from "react-native";
import { Spacing } from "../../constants/theme/spacing";

export const styles = StyleSheet.create({
  root: { flexGrow: 0 },
  content: {
    flexDirection: "row",
    gap: Spacing.xs,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
  },
});
