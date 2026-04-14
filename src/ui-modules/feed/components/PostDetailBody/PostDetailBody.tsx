import React from "react";
import { View, Text } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import * as Haptics from "expo-haptics";
import { observer } from "mobx-react-lite";
import type { IPost } from "@common/types/api";
import { styles } from "./PostDetailBody.styles";
import { ButtonLink } from "@ui-kit";

import { postDetailStore } from "src/stores";
import { PostContent } from "../PostContent";
import { PostCover } from "../PostCover";
import { PostHeader } from "../PostHeader";
import { PostStats } from "../PostStats";

export type TSortOrder = "newest" | "oldest";

function formatCommentsCount(n: number): string {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return `${n} комментарий`;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return `${n} комментария`;
  return `${n} комментариев`;
}

interface IPostDetailBodyProps {
  post: IPost;
  onLike: () => void;
  sortOrder: TSortOrder;
  onSortToggle: () => void;
}

const PostDetailBody = observer(
  ({ post, onLike, sortOrder, onSortToggle }: IPostDetailBodyProps) => {
    const scale = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }],
    }));

    const handleLike = () => {
      scale.value = withSequence(
        withTiming(1.15, { duration: 120 }),
        withTiming(1, { duration: 120 }),
      );
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      onLike();
    };

    const { isLiked, likesCount, commentsCount } = postDetailStore;

    return (
      <View style={styles.container}>
        <PostHeader author={post.author} />
        <PostCover uri={post.coverUrl} isPaid={false} />
        <View style={styles.body}>
          <PostContent title={post.title} preview={post.body || post.preview} isPaid={false} />
          <PostStats
            likesCount={likesCount}
            commentsCount={commentsCount}
            isLiked={isLiked}
            onLike={handleLike}
            likeWrapper={(btn) => <Animated.View style={animatedStyle}>{btn}</Animated.View>}
          />
        </View>

        <View style={styles.divider} />

        <View style={styles.commentsHeader}>
          <Text style={styles.commentsCount}>{formatCommentsCount(commentsCount)}</Text>
          <ButtonLink
            label={sortOrder === "newest" ? "Сначала новые" : "Сначала старые"}
            onPress={onSortToggle}
          />
        </View>
      </View>
    );
  },
);

export default PostDetailBody;
