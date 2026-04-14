import React from "react";
import { Pressable, Text } from "react-native";
import { styles } from "./ItemTab.styles";
import { resolveContainer, resolveText } from "./ItemTab.utils";

export interface ItemTabProps {
  label: string;
  isActive?: boolean;
  disabled?: boolean;
  onPress?: () => void;
}

export const ItemTab: React.FC<ItemTabProps> = ({
  label,
  isActive = false,
  disabled = false,
  onPress,
}) => (
  <Pressable
    onPress={onPress}
    disabled={disabled}
    style={({ pressed }) => [
      styles.base,
      resolveContainer({ isActive, disabled, pressed }, styles),
    ]}
  >
    {({ pressed }) => (
      <Text style={[styles.label, resolveText({ isActive, disabled, pressed }, styles)]}>
        {label}
      </Text>
    )}
  </Pressable>
);
