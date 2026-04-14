import { StyleSheet } from "react-native";
import { Colors } from "../../constants/theme/colors";
import { Spacing } from "../../constants/theme/spacing";
import { FontFamily } from "../../constants/theme/typography";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surface,
    borderRadius: 24,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderWidth: 2,
    borderColor: "transparent",
  },
  containerFocused: { backgroundColor: Colors.white, borderColor: Colors.inputFocusBorder },
  containerDisabled: { backgroundColor: Colors.white },
  input: { fontFamily: FontFamily.regular, fontSize: 14, lineHeight: 20, padding: 0, margin: 0 },
});
