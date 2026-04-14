import { Colors } from "@constants";

type State = { isActive: boolean; disabled: boolean; pressed: boolean };
type PressState = { disabled: boolean; pressed: boolean };

export function resolveCommentLikeIconColor({ isActive, disabled, pressed }: State): string {
  if (isActive) {
    if (disabled) return Colors.likeIconOnDisabled;
    if (pressed) return Colors.likeIconOnPressed;
    return Colors.likeIconOn;
  }
  if (disabled) return Colors.textLikeDisabled;
  if (pressed) return Colors.textStrong;
  return Colors.textDefault;
}

export function resolveCommentLikeCountColor({ disabled, pressed }: PressState): string {
  if (disabled) return Colors.textLikeDisabled;
  if (pressed) return Colors.textStrong;
  return Colors.textDefault;
}
