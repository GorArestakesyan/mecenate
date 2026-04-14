import { useInfiniteQuery } from "@tanstack/react-query";
import { useServices } from "../../../providers/ServicesProvider/ServicesProvider";
import { TFeedTier } from "@navigation/types";

export function useFeed(tier?: TFeedTier) {
  const { apiService } = useServices();

  const query = useInfiniteQuery({
    queryKey: ["feed", tier ?? "all"] as const,
    queryFn: ({ pageParam }) =>
      apiService.posts.getPosts(pageParam as string | undefined, 10, tier),
    getNextPageParam: (lastPage) =>
      lastPage.hasMore ? (lastPage.nextCursor ?? undefined) : undefined,
    initialPageParam: undefined as string | undefined,
  });

  return {
    posts: query.data?.pages.flatMap((p) => p.posts) ?? [],
    isLoading: query.isLoading,
    isError: query.isError,
    isFetchingNextPage: query.isFetchingNextPage,
    hasNextPage: query.hasNextPage,
    isRefetching: query.isRefetching,
    refetch: query.refetch,
    fetchNextPage: query.fetchNextPage,
  };
}
