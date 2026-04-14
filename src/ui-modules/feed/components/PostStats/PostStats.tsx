import React from "react";
import { View } from "react-native";
import { ButtonAction } from "@ui-kit";
import { styles } from "./PostStats.styles";

interface IPostStatsProps {
  likesCount: number;
  commentsCount: number;
  isLiked: boolean;
  onLike: () => void;
}

const PostStats = ({ likesCount, commentsCount, isLiked, onLike }: IPostStatsProps) => (
  <View style={styles.row}>
    <ButtonAction variant="like" count={likesCount} isActive={isLiked} onPress={onLike} />
    <ButtonAction variant="comment" count={commentsCount} />
  </View>
);

export default PostStats;
