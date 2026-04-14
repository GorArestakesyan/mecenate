import React from "react";
import { Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./ButtonLike.styles";
import { resolveLikeColors } from "./ButtonLike.utils";

export interface ButtonLikeProps {
  count: number;
  isActive?: boolean;
  disabled?: boolean;
  onPress?: () => void;
}

export const ButtonLike: React.FC<ButtonLikeProps> = ({
  count,
  isActive = false,
  disabled = false,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress} disabled={disabled} style={styles.base}>
      {({ pressed }) => {
        const { iconColor, textColor } = resolveLikeColors({
          isActive,
          disabled,
          pressed,
        });
        return (
          <>
            <Ionicons name={isActive ? "heart" : "heart-outline"} size={18} color={iconColor} />
            <Text style={[styles.count, { color: textColor }]}>{count}</Text>
          </>
        );
      }}
    </Pressable>
  );
};
