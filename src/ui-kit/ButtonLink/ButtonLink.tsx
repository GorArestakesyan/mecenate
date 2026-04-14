import React from "react";
import { Pressable, Text } from "react-native";
import { styles } from "./ButtonLink.styles";

export interface ButtonLinkProps {
  label: string;
  disabled?: boolean;
  onPress?: () => void;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({ label, disabled = false, onPress }) => (
  <Pressable onPress={onPress} disabled={disabled}>
    {({ pressed }) => (
      <Text
        style={[styles.label, pressed && !disabled && styles.pressed, disabled && styles.disabled]}
      >
        {label}
      </Text>
    )}
  </Pressable>
);
