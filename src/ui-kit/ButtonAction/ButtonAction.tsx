import React from "react";
import { Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { resolveColors, resolveIcon } from "./ButtonAction.utils";
import { styles } from "./ButtonAction.styles";

export type ButtonActionVariant = "like" | "comment";

export interface ButtonActionProps {
  variant?: ButtonActionVariant;
  count: number;
  isActive?: boolean;
  disabled?: boolean;
  onPress?: () => void;
}

export const ButtonAction: React.FC<ButtonActionProps> = ({
  variant = "like",
  count,
  isActive = false,
  disabled = false,
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [styles.base, resolveContainer({ isActive, disabled, pressed })]}
    >
      {({ pressed }) => {
        const { iconColor, textColor } = resolveColors({
          isActive,
          disabled,
          pressed,
        });
        return (
          <>
            <Ionicons name={resolveIcon(variant, isActive)} size={16} color={iconColor} />
            <Text style={[styles.count, { color: textColor }]}>{count}</Text>
          </>
        );
      }}
    </Pressable>
  );
};

type ButtonActionVisualState = {
  isActive: boolean;
  disabled: boolean;
  pressed: boolean;
};

function resolveContainer({ isActive, disabled, pressed }: ButtonActionVisualState) {
  if (isActive) {
    if (disabled) return styles.onDisabled;
    if (pressed) return styles.onPressed;
    return styles.onDefault;
  }
  if (disabled) return styles.offDisabled;
  if (pressed) return styles.offPressed;
  return styles.offDefault;
}
