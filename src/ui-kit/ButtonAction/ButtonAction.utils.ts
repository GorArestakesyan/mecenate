import { Colors } from "../../constants/theme/colors";
import type { ButtonActionVariant } from "./ButtonAction";

export type ButtonActionVisualState = {
  isActive: boolean;
  disabled: boolean;
  pressed: boolean;
};

export function resolveIcon(variant: ButtonActionVariant, isActive: boolean) {
  if (variant === "comment") return "chatbubble" as const;
  return (isActive ? "heart" : "heart-outline") as "heart" | "heart-outline";
}

export function resolveColors({ isActive, disabled }: ButtonActionVisualState) {
  if (isActive) {
    return { iconColor: Colors.likeOnContent, textColor: Colors.likeOnContent };
  }
  if (disabled) {
    return { iconColor: Colors.textMuted, textColor: Colors.textMuted };
  }
  return { iconColor: Colors.textDefault, textColor: Colors.textDefault };
}
