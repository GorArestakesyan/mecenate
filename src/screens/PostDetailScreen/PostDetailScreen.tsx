import React, { useEffect, useCallback, useState, useMemo } from "react";
import {
  View,
  FlatList,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import type { RootStackScreenProps } from "@navigation";
import { Colors, IS_IOS } from "@constants";
import { styles } from "./PostDetailScreen.styles";
import { postDetailStore } from "src/stores";
import {
  usePostDetail,
  useComments,
  useAddComment,
  useDetailLike,
  useWebSocket,
} from "@ui-modules/feed/hooks";
import type { TSortOrder } from "@ui-modules/feed/components/PostDetailBody/PostDetailBody";
import { CommentItem, CommentInput } from "@ui-modules/feed";
import PostDetailBody from "@ui-modules/feed/components/PostDetailBody/PostDetailBody";

type Props = RootStackScreenProps<"PostDetail">;

const PostDetailScreen = ({ route, navigation }: Props) => {
  const { postId, initialPost } = route.params;

  const { post } = usePostDetail(postId);
  const displayPost = post ?? initialPost;

  const {
    comments,
    isLoading: commentsLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useComments(postId);

  const { addComment, isPending } = useAddComment(postId);
  const { toggleLike } = useDetailLike(postId);
  const [sortOrder, setSortOrder] = useState<TSortOrder>("newest");

  /** Connect WebSocket for real-time updates */
  useWebSocket(postId);

  useEffect(() => {
    if (displayPost) {
      postDetailStore.initFromPost(displayPost);
    }
  }, [displayPost?.id]);

  const handleEndReached = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) fetchNextPage();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const sortedComments = useMemo(() => {
    const sorted = [...comments].sort(
      (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
    );
    return sortOrder === "oldest" ? sorted : sorted.reverse();
  }, [comments, sortOrder]);

  return (
    <SafeAreaView style={styles.root} edges={["top", "bottom"]}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={IS_IOS ? "padding" : undefined}
        keyboardVerticalOffset={0}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="chevron-back" size={24} color={Colors.textStrong} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Публикация</Text>
          <View style={styles.backButton} />
        </View>

        <FlatList
          data={sortedComments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CommentItem comment={item} />}
          ListHeaderComponent={
            displayPost ? (
              <PostDetailBody
                post={displayPost}
                onLike={toggleLike}
                sortOrder={sortOrder}
                onSortToggle={() => setSortOrder((s) => (s === "newest" ? "oldest" : "newest"))}
              />
            ) : (
              <View style={styles.loader}>
                <ActivityIndicator color={Colors.brand} />
              </View>
            )
          }
          ListFooterComponent={
            isFetchingNextPage || commentsLoading ? (
              <ActivityIndicator color={Colors.brand} style={styles.footerLoader} />
            ) : null
          }
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.4}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        />

        <CommentInput onSubmit={addComment} disabled={isPending} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default PostDetailScreen;
