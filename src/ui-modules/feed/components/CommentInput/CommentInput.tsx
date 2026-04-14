import React, { useState } from "react";
import { View } from "react-native";
import { InputText, ButtonSend } from "@ui-kit";
import { styles } from "./CommentInput.styles";

interface ICommentInputProps {
  onSubmit: (text: string) => void;
  disabled?: boolean;
}

const CommentInput = ({ onSubmit, disabled = false }: ICommentInputProps) => {
  const [value, setValue] = useState("");

  const canSend = value.trim().length > 0 && !disabled;

  const handleSend = () => {
    const text = value.trim();
    if (!text) return;
    onSubmit(text);
    setValue("");
  };

  return (
    <View style={styles.container}>
      <InputText
        value={value}
        onChangeText={setValue}
        placeholder="Ваш комментарий"
        disabled={disabled}
        style={styles.input}
      />
      <ButtonSend onPress={handleSend} disabled={!canSend} />
    </View>
  );
};

export default CommentInput;
