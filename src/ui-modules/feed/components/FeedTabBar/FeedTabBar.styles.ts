import { StyleSheet } from "react-native";
import { Colors, Spacing } from "@constants";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    gap: Spacing.xs,
    borderBottomWidth: 1,
    borderBottomColor: Colors.surface,
  },
  tabsWrapper: {
    flexDirection: "row",
    borderWidth: 1,
    width: "100%",
    borderColor: "#E8ECEF",
    borderRadius: 20,
  },
});
