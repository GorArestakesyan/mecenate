import React, { useState } from "react";
import { TextInput, View, ViewStyle } from "react-native";
import { Colors } from "../../constants/theme/colors";
import { styles } from "./InputText.styles";
import { resolvePlaceholder } from "./InputText.utils";

export interface InputTextProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  disabled?: boolean;
  style?: ViewStyle;
}

export const InputText: React.FC<InputTextProps> = ({
  value,
  onChangeText,
  placeholder = "Ваш комментарий",
  disabled = false,
  style,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const isFilled = value.length > 0;

  return (
    <View
      style={[
        styles.container,
        isFocused && styles.containerFocused,
        disabled && styles.containerDisabled,
        style,
      ]}
    >
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={resolvePlaceholder({
          isFocused,
          isFilled,
          disabled,
        })}
        editable={!disabled}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={[
          styles.input,
          {
            color: isFilled ? Colors.inputTextFilled : Colors.inputPlaceholder,
          },
        ]}
        returnKeyType="send"
      />
    </View>
  );
};
