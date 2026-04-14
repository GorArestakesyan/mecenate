import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./FeedScreen.styles";
import { FeedTabNavigator } from "@ui-modules/feed";

const FeedScreen = () => (
  <SafeAreaView style={styles.root} edges={["top"]}>
    <FeedTabNavigator />
  </SafeAreaView>
);

export default FeedScreen;
