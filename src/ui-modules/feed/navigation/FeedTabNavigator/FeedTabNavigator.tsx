import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { FEED_TABS } from "../constants";
import { styles } from "./FeedTabNavigator.styles";
import type { TFeedTabParamList } from "../types";
import { FeedAllScreen, FeedFreeScreen, FeedPaidScreen } from "../FeedTabScreens";
import { FeedTabBar } from "@ui-modules/feed/components";

const Tab = createMaterialTopTabNavigator<TFeedTabParamList>();

const getTitle = (name: keyof TFeedTabParamList) => FEED_TABS.find((t) => t.name === name)!.title;

const FeedTabNavigator = () => (
  <Tab.Navigator
    tabBar={(props) => <FeedTabBar {...props} />}
    screenOptions={{ sceneStyle: styles.scene }}
  >
    <Tab.Screen name="All" component={FeedAllScreen} options={{ title: getTitle("All") }} />
    <Tab.Screen name="Free" component={FeedFreeScreen} options={{ title: getTitle("Free") }} />
    <Tab.Screen name="Paid" component={FeedPaidScreen} options={{ title: getTitle("Paid") }} />
  </Tab.Navigator>
);

export default FeedTabNavigator;
