import React, { ReactNode } from "react";
import { View } from "react-native";
import { ButtonAction } from "@ui-kit";
import { styles } from "./PostStats.styles";

interface IPostStatsProps {
  likesCount: number;
  commentsCount: number;
  isLiked: boolean;
  onLike: () => void;
  onCommentPress?: () => void;
  likeWrapper?: (children: ReactNode) => ReactNode;
}

const PostStats = ({
  likesCount,
  commentsCount,
  isLiked,
  onLike,
  onCommentPress,
  likeWrapper,
}: IPostStatsProps) => {
  const likeButton = (
    <ButtonAction variant="like" count={likesCount} isActive={isLiked} onPress={onLike} />
  );

  return (
    <View style={styles.row}>
      {likeWrapper ? likeWrapper(likeButton) : likeButton}
      <ButtonAction variant="comment" count={commentsCount} onPress={onCommentPress} />
    </View>
  );
};

export default PostStats;
