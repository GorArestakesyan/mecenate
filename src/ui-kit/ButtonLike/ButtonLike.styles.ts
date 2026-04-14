import { StyleSheet } from "react-native";
import { Spacing } from "../../constants/theme/spacing";
import { FontFamily } from "../../constants/theme/typography";

export const styles = StyleSheet.create({
  base: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.xs,
  },
  count: { fontFamily: FontFamily.medium, fontSize: 12, lineHeight: 16 },
});
