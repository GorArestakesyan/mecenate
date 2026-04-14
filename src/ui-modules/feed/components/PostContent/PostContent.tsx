import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ButtonLink } from "@ui-kit";
import { styles } from "./PostContent.styles";
import PaidOverlay from "../PaidOverlay";
import { BlurView } from "expo-blur";

const PostContent = ({ title, preview, isPaid }: IPostContentProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLongText, setIsLongText] = useState(false);

  return (
    <React.Fragment>
      <View style={styles.container}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>

        <View>
          <Text
            style={[styles.preview, styles.measureText]}
            onTextLayout={(e) => {
              if (!isLongText && e.nativeEvent.lines.length > 2) setIsLongText(true);
            }}
            accessible={false}
            importantForAccessibility="no-hide-descendants"
          >
            {preview}
          </Text>

          <Text style={styles.preview} numberOfLines={isExpanded ? undefined : 2}>
            {preview}
          </Text>

          {isLongText && !isExpanded && (
            <ButtonLink label="Показать еще" onPress={() => setIsExpanded(true)} />
          )}
        </View>
      </View>
    </React.Fragment>
  );
};

interface IPostContentProps {
  title: string;
  preview: string;
  isPaid: boolean;
}

export default PostContent;
