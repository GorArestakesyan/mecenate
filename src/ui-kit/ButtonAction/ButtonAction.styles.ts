import { StyleSheet } from "react-native";
import { Colors } from "../../constants/theme/colors";
import { Spacing } from "../../constants/theme/spacing";
import { FontFamily } from "@constants/theme/typography";

export const styles = StyleSheet.create({
  base: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.xs,
    padding: Spacing.s,
    borderRadius: 20,
  },
  offDefault: { backgroundColor: Colors.surface },
  offPressed: { backgroundColor: Colors.surfacePressed },
  offDisabled: { backgroundColor: Colors.white },
  onDefault: { backgroundColor: Colors.likeOn },
  onPressed: { backgroundColor: Colors.likeOnPressed },
  onDisabled: { backgroundColor: Colors.likeOnDisabled },
  count: {
    fontSize: 13,
    fontFamily: FontFamily.bold,
    lineHeight: 18,
  },
});
