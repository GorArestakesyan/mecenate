import React from "react";
import { ScrollView } from "react-native";
import { ItemTab } from "../ItemTab";
import { styles } from "./TabBar.styles";

export interface Tab {
  id: string;
  label: string;
  disabled?: boolean;
}

export interface TabBarProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

export const TabBar: React.FC<TabBarProps> = ({ tabs, activeTab, onTabChange }) => (
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.content}
    style={styles.root}
  >
    {tabs.map((tab) => (
      <ItemTab
        key={tab.id}
        label={tab.label}
        isActive={activeTab === tab.id}
        disabled={tab.disabled}
        onPress={() => onTabChange(tab.id)}
      />
    ))}
  </ScrollView>
);
