import React, { useEffect, useRef } from "react";
import { Animated, ViewStyle } from "react-native";
import { styles } from "./SpacePlaceholder.styles";

const ANIMATION_DURATION = 700;

export const SpacePlaceholder = ({ boxStyle }: ISpacePlaceholderProps) => {
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: ANIMATION_DURATION,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: ANIMATION_DURATION,
          useNativeDriver: true,
        }),
      ]),
    ).start();
    return () => opacity.stopAnimation();
  }, []);

  return <Animated.View style={[styles.container, boxStyle, { opacity }]} />;
};

export interface ISpacePlaceholderProps {
  boxStyle?: ViewStyle;
}
