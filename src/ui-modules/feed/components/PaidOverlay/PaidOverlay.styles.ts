import { StyleSheet } from "react-native";
import { Colors, Spacing, Typography } from "@constants";

export const styles = StyleSheet.create({
  blurred: {
    height: "100%",
    maxHeight: 393,
    width: "100%",
    zIndex: 9,
    overflow: "hidden",
  },
  frost: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 255, 255, 0.72)",
  },
  text: {
    ...Typography.paidOverlay,
    color: Colors.white,
    textAlign: "center",
    marginTop: Spacing.sm,
    marginBottom: Spacing.md,
  },
  button: {
    marginTop: Spacing.xs,
  },
  iconBox: {
    borderRadius: 10,
    padding: Spacing.s,
    backgroundColor: Colors.brand,
  },
  box: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
