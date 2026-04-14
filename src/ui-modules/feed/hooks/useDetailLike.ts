import { useMemo } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useServices } from "@services";
import { LikeEntity } from "@common/entities/LikeEntity";
import { postDetailStore } from "src/stores";

export function useDetailLike(postId: string) {
  const { apiService } = useServices();
  const queryClient = useQueryClient();

  const likeEntity = useMemo(
    () => new LikeEntity(queryClient, postDetailStore, postId),
    [queryClient, postId],
  );

  const { mutate: toggleLike } = useMutation({
    mutationFn: () => apiService.posts.toggleLike(postId),
    onMutate: async () => likeEntity.optimisticToggle(),
    onError: (_err, _v, context) => {
      if (context?.prev) likeEntity.rollback(context.prev);
    },
    onSuccess: (data) => likeEntity.confirm(data),
  });

  return { toggleLike };
}
