import { StyleSheet } from "react-native";
import { Colors } from "../../constants/theme/colors";
import { Spacing } from "../../constants/theme/spacing";
import { FontFamily } from "../../constants/theme/typography";

export const styles = StyleSheet.create({
  base: {
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.lg,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "33.3%",
  },
  onDefault: { backgroundColor: Colors.brand },
  onPressed: { backgroundColor: Colors.brandPressed },
  onDisabled: { backgroundColor: Colors.brandDisabled },
  offDefault: { backgroundColor: Colors.white },
  offPressed: { backgroundColor: Colors.surfaceSubtle },
  offDisabled: { backgroundColor: Colors.surfaceSubtle },
  label: { fontFamily: FontFamily.medium, fontSize: 14, lineHeight: 20 },
  textOn: { color: Colors.textOnBrand },
  textOff: { color: Colors.textDefault },
  textOffDisabled: { color: Colors.textMutedStrong },
});

export type ItemTabStyles = typeof styles;
