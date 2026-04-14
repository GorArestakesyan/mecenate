import React from "react";
import { View } from "react-native";
import type { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";
import { ItemTab } from "@ui-kit";
import { styles } from "./FeedTabBar.styles";

const FeedTabBar = ({ state, descriptors, navigation }: MaterialTopTabBarProps) => (
  <View style={styles.container}>
    <View style={styles.tabsWrapper}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.title ?? route.name;
        const isActive = state.index === index;

        return (
          <ItemTab
            key={route.key}
            label={label}
            isActive={isActive}
            onPress={() => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });
              if (!isActive && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
              }
            }}
          />
        );
      })}
    </View>
  </View>
);

export default FeedTabBar;
