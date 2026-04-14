import { Colors } from "../../constants/theme/colors";

export type InputTextPlaceholderState = {
  isFocused: boolean;
  isFilled: boolean;
  disabled: boolean;
};

export function resolvePlaceholder({ isFocused, isFilled, disabled }: InputTextPlaceholderState) {
  if (disabled) return Colors.inputPlaceholderDisabled;
  if (isFilled) return Colors.inputTextFilled;
  if (isFocused) return Colors.inputPlaceholderFocused;
  return Colors.inputPlaceholder;
}
