import { Colors } from "../../constants/theme/colors";

export type ButtonLikeVisualState = {
  isActive: boolean;
  disabled: boolean;
  pressed: boolean;
};

export function resolveLikeColors({ isActive, disabled, pressed }: ButtonLikeVisualState) {
  if (isActive) {
    if (disabled) {
      return { iconColor: Colors.likeIconOnDisabled, textColor: Colors.likeIconOnDisabled };
    }
    if (pressed) {
      return { iconColor: Colors.likeIconOnPressed, textColor: Colors.textStrong };
    }
    return { iconColor: Colors.likeIconOn, textColor: Colors.textDefault };
  }

  if (disabled) return { iconColor: Colors.textLikeDisabled, textColor: Colors.textLikeDisabled };
  if (pressed) return { iconColor: Colors.textStrong, textColor: Colors.textStrong };
  return { iconColor: Colors.textDefault, textColor: Colors.textDefault };
}
