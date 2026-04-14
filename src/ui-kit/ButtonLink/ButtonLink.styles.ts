import { StyleSheet } from "react-native";
import { Colors } from "../../constants/theme/colors";
import { FontFamily } from "../../constants/theme/typography";

export const styles = StyleSheet.create({
  label: { fontFamily: FontFamily.medium, fontSize: 14, lineHeight: 20, color: Colors.brand },
  pressed: { color: Colors.brandHover },
  disabled: { color: Colors.brandDisabled },
});
