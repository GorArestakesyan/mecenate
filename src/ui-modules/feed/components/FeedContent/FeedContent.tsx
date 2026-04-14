import React from "react";
import { FlatList, RefreshControl } from "react-native";

import { FeedFooter } from "../FeedFooter";
import { useFeedContentStyles } from "./useFeedContent.styles";
import { Colors } from "@constants";
import type { FeedTier } from "../../navigation/types";
import type { IPost } from "@common/types/api";
import { FeedLoader } from "@ui-kit";
import { FeedError } from "../FeedError";
import { FeedEmpty } from "../FeedEmpty";
import { PostCard } from "../PostCard";
import { useFeed, useLike } from "@ui-modules/feed/hooks";

interface IFeedContentProps {
  tier?: FeedTier;
  onHomePress?: () => void;
}

const FeedContent = ({ tier, onHomePress }: IFeedContentProps) => {
  const {
    posts,
    isLoading,
    isError,
    isFetchingNextPage,
    isRefetching,
    hasNextPage,
    refetch,
    fetchNextPage,
  } = useFeed(tier);

  const { toggleLike } = useLike(tier);
  const dynamicStyles = useFeedContentStyles(posts.length === 0);

  if (isError && posts.length === 0) {
    return <FeedError onRetry={refetch} />;
  }

  return (
    <FlatList<IPost>
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PostCard post={item} onLike={toggleLike} />}
      onEndReached={() => {
        if (hasNextPage && !isFetchingNextPage) fetchNextPage();
      }}
      onEndReachedThreshold={0.4}
      refreshControl={
        <RefreshControl
          refreshing={isRefetching && !isFetchingNextPage}
          onRefresh={refetch}
          tintColor={Colors.brand}
          colors={[Colors.brand]}
        />
      }
      ListHeaderComponent={<FeedLoader visible={isLoading && posts.length === 0} />}
      ListEmptyComponent={<FeedEmpty visible={!isLoading} onHomePress={onHomePress} />}
      ListFooterComponent={<FeedFooter visible={isFetchingNextPage} />}
      contentContainerStyle={dynamicStyles.contentContainer}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default FeedContent;
