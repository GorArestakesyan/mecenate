import React from "react";
import { Pressable, Text } from "react-native";
import { LikeIcon, LikeIconOutlined } from "@icons";
import { styles } from "./ButtonCommentLike.styles";
import {
  resolveCommentLikeIconColor,
  resolveCommentLikeCountColor,
} from "./ButtonCommentLike.utils";

export interface ButtonCommentLikeProps {
  count?: number;
  isActive?: boolean;
  disabled?: boolean;
  onPress?: () => void;
}

export const ButtonCommentLike: React.FC<ButtonCommentLikeProps> = ({
  count = 0,
  isActive = false,
  disabled = false,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress} disabled={disabled} style={styles.container}>
      {({ pressed }) => {
        const iconColor = resolveCommentLikeIconColor({ isActive, disabled, pressed });
        const countColor = resolveCommentLikeCountColor({ disabled, pressed });
        const IconComponent = isActive ? LikeIcon : LikeIconOutlined;
        return (
          <>
            <IconComponent width={16} height={16} color={iconColor} />
            <Text style={[styles.count, { color: countColor }]}>{count}</Text>
          </>
        );
      }}
    </Pressable>
  );
};
