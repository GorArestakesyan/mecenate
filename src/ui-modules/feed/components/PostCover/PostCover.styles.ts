import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "@constants";

const { width } = Dimensions.get("window");
const IMAGE_HEIGHT = Math.min(Math.max(Math.round(width * (9 / 8)), 260), 393);

export const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: IMAGE_HEIGHT,
    backgroundColor: Colors.surface,
  },
});
