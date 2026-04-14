import { useMutation, useQueryClient, InfiniteData } from "@tanstack/react-query";
import { useServices } from "../../../providers/ServicesProvider/ServicesProvider";
import type { FeedTier } from "../navigation/types";
import type { IPosts, IPost } from "@common/types/api";

export function useLike(tier?: FeedTier) {
  const { apiService } = useServices();
  const queryClient = useQueryClient();
  const queryKey = ["feed", tier ?? "all"] as const;

  const { mutate: toggleLike } = useMutation({
    mutationFn: (postId: string) => apiService.posts.toggleLike(postId),

    onMutate: async (postId: string) => {
      await queryClient.cancelQueries({ queryKey });
      const previous = queryClient.getQueryData(queryKey);

      queryClient.setQueryData<InfiniteData<IPosts>>(queryKey, (old) => {
        if (!old) return old;
        return {
          ...old,
          pages: old.pages.map((page) => ({
            ...page,
            posts: page.posts.map((post: IPost) =>
              post.id === postId
                ? {
                    ...post,
                    isLiked: !post.isLiked,
                    likesCount: post.isLiked ? post.likesCount - 1 : post.likesCount + 1,
                  }
                : post,
            ),
          })),
        };
      });

      return { previous };
    },

    onError: (_err, _postId, context) => {
      if (context?.previous) {
        queryClient.setQueryData(queryKey, context.previous);
      }
    },

    onSuccess: (data, postId) => {
      queryClient.setQueryData<InfiniteData<IPosts>>(queryKey, (old) => {
        if (!old) return old;
        return {
          ...old,
          pages: old.pages.map((page) => ({
            ...page,
            posts: page.posts.map((post: IPost) =>
              post.id === postId
                ? {
                    ...post,
                    isLiked: data.isLiked,
                    likesCount: data.likesCount,
                  }
                : post,
            ),
          })),
        };
      });
    },
  });

  return { toggleLike };
}
