import { useInfiniteQuery } from "@tanstack/react-query";
import { useServices } from "../../../providers/ServicesProvider/ServicesProvider";

export function useComments(postId: string) {
  const { apiService } = useServices();

  const query = useInfiniteQuery({
    queryKey: ["comments", postId],
    queryFn: ({ pageParam }) =>
      apiService.posts.getComments(postId, pageParam as string | undefined),
    getNextPageParam: (lastPage) =>
      lastPage.hasMore ? (lastPage.nextCursor ?? undefined) : undefined,
    initialPageParam: undefined as string | undefined,
  });

  return {
    comments: query.data?.pages.flatMap((p) => p.comments) ?? [],
    isLoading: query.isLoading,
    isFetchingNextPage: query.isFetchingNextPage,
    hasNextPage: query.hasNextPage,
    fetchNextPage: query.fetchNextPage,
  };
}
