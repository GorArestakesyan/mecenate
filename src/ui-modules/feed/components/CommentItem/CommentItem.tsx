import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import type { IComment } from "@common/types/api";
import { ButtonCommentLike } from "@ui-kit";
import { styles } from "./CommentItem.styles";

interface ICommentItemProps {
  comment: IComment;
}

const CommentItem = ({ comment }: ICommentItemProps) => {
  const [isLiked, setIsLiked] = useState(comment.isLiked ?? false);
  const [likesCount, setLikesCount] = useState(comment.likesCount ?? 0);

  const handleLike = () => {
    setIsLiked((prev) => !prev);
    setLikesCount((prev) => (isLiked ? prev - 1 : prev + 1));
    // TODO: call apiService.comments.toggleLike(comment.id) when endpoint is available
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: comment.author.avatarUrl }} style={styles.avatar} />
      <View style={styles.content}>
        <Text style={styles.username}>{comment.author.displayName}</Text>
        <Text style={styles.text}>{comment.text}</Text>
      </View>
      <ButtonCommentLike count={likesCount} isActive={isLiked} onPress={handleLike} />
    </View>
  );
};

export default CommentItem;
