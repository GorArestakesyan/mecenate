import { StyleSheet } from "react-native";
import { Colors } from "../../constants/theme/colors";
import { Spacing } from "../../constants/theme/spacing";
import { FontFamily } from "../../constants/theme/typography";

export const styles = StyleSheet.create({
  base: {
    backgroundColor: Colors.brand,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: Spacing.xl,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: Spacing.sm,
    minHeight: 48,
  },
  fullWidth: { alignSelf: "stretch" },
  iconOnly: { paddingHorizontal: 14, width: 48, minHeight: 48 },
  stateActive: { backgroundColor: Colors.brandHover },
  stateDisabled: { backgroundColor: Colors.brandDisabled },
  label: {
    fontFamily: FontFamily.semiBold,
    fontSize: 16,
    lineHeight: 24,
    color: Colors.textOnBrand,
  },
});
