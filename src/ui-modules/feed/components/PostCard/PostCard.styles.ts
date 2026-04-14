import { StyleSheet } from "react-native";
import { Colors, Spacing } from "@constants";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    marginBottom: Spacing.lg,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  body: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    paddingBottom: Spacing.md,
    gap: Spacing.md,
  },
  placeholderBox: {
    gap: Spacing.sm,
    marginTop: Spacing.sm,
  },
  titlePlaceholder: {
    width: "100%",
    maxWidth: 164,
  },
  descriptionPlaceholder: {
    width: "100%",
    height: 40,
  },
});
