import React from "react";
import { View, Pressable } from "react-native";
import type { IPost } from "@common/types/api";
import { styles } from "./PostCard.styles";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "@navigation";

import { SpacePlaceholder } from "@ui-kit";

import { PostStats } from "../PostStats";
import { PostContent } from "../PostContent";
import { PostCover } from "../PostCover";
import { PostHeader } from "../PostHeader";

interface IPostCardProps {
  post: IPost;
  onLike: (id: string) => void;
}

type Nav = NativeStackNavigationProp<RootStackParamList>;

const PostCard = ({ post, onLike }: IPostCardProps) => {
  const isPostPaid = post.tier === "paid";
  const navigation = useNavigation<Nav>();

  const handlePress = () => {
    if (!isPostPaid) {
      navigation.navigate("PostDetail", { postId: post.id, initialPost: post });
    }
  };

  return (
    <Pressable onPress={handlePress} style={styles.card}>
      <PostHeader author={post.author} />
      <PostCover uri={post.coverUrl} isPaid={isPostPaid} />
      <View style={styles.body}>
        {isPostPaid ? (
          <View style={styles.placeholderBox}>
            <SpacePlaceholder boxStyle={styles.titlePlaceholder} />
            <SpacePlaceholder boxStyle={styles.descriptionPlaceholder} />
          </View>
        ) : (
          <PostContent title={post.title} preview={post.preview} isPaid={isPostPaid} />
        )}

        {!isPostPaid && (
          <PostStats
            likesCount={post.likesCount}
            commentsCount={post.commentsCount}
            isLiked={post.isLiked}
            onLike={() => onLike(post.id)}
            onCommentPress={handlePress}
          />
        )}
      </View>
    </Pressable>
  );
};

export default PostCard;
