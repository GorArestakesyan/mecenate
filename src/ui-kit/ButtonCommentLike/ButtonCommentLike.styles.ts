import { StyleSheet } from "react-native";
import { FontFamily } from "@constants";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
  count: {
    fontFamily: FontFamily.bold,
    fontSize: 13,
    lineHeight: 18,
  },
});
