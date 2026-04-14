import type { ItemTabStyles } from "./ItemTab.styles";

export type ItemTabVisualState = {
  isActive: boolean;
  disabled: boolean;
  pressed: boolean;
};

export function resolveContainer(state: ItemTabVisualState, s: ItemTabStyles) {
  const { isActive, disabled, pressed } = state;
  if (isActive) {
    if (disabled) return s.onDisabled;
    if (pressed) return s.onPressed;
    return s.onDefault;
  }
  if (disabled) return s.offDisabled;
  if (pressed) return s.offPressed;
  return s.offDefault;
}

export function resolveText(state: ItemTabVisualState, s: ItemTabStyles) {
  if (state.isActive) return s.textOn;
  if (state.disabled) return s.textOffDisabled;
  return s.textOff;
}
