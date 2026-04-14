import React from "react";
import { Pressable } from "react-native";
import { SendIcon } from "@icons";
import { Colors } from "@constants";
import { styles } from "./ButtonSend.styles";

export interface ButtonSendProps {
  onPress?: () => void;
  disabled?: boolean;
}

export const ButtonSend: React.FC<ButtonSendProps> = ({ onPress, disabled = false }) => {
  return (
    <Pressable onPress={onPress} disabled={disabled} style={styles.container}>
      {({ pressed }) => {
        const color = disabled
          ? Colors.brandDisabled
          : pressed
            ? Colors.brandPressed
            : Colors.brand;

        return <SendIcon width={24} height={24} color={color} />;
      }}
    </Pressable>
  );
};
