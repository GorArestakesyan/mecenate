import React from "react";
import { Pressable, Text, ActivityIndicator, ViewStyle } from "react-native";
import { Colors } from "../../constants/theme/colors";
import { styles } from "./Button.styles";

export type ButtonVariant = "default" | "loading" | "disabled";

export interface ButtonProps {
  label?: string;
  icon?: React.ReactNode;
  variant?: ButtonVariant;
  onPress?: () => void;
  style?: ViewStyle;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  variant = "default",
  onPress,
  style,
  fullWidth = true,
}) => {
  const isDisabled = variant === "disabled";
  const isLoading = variant === "loading";
  const iconOnly = !label && Boolean(icon);

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled || isLoading}
      style={({ pressed }) => [
        styles.base,
        fullWidth && styles.fullWidth,
        iconOnly && styles.iconOnly,
        (isLoading || (!isDisabled && pressed)) && styles.stateActive,
        isDisabled && styles.stateDisabled,
        style,
      ]}
    >
      {isLoading ? (
        <ActivityIndicator color={Colors.textOnBrand} size="small" />
      ) : (
        <>
          {icon ?? null}
          {label ? <Text style={styles.label}>{label}</Text> : null}
        </>
      )}
    </Pressable>
  );
};
