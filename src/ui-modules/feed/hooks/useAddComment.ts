import { useMemo } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useServices } from "../../../providers/ServicesProvider/ServicesProvider";
import { postDetailStore } from "../../../stores/PostDetailStore";
import type { IComment } from "@common/types/api";
import { CommentEntity } from "@common/entities/CommentEntity";

export function useAddComment(postId: string) {
  const { apiService } = useServices();
  const queryClient = useQueryClient();

  const commentEntity = useMemo(
    () => new CommentEntity(queryClient, postDetailStore, postId),
    [queryClient, postId],
  );

  const { mutate: addComment, isPending } = useMutation({
    mutationFn: (text: string) => apiService.posts.addComment(postId, text),
    onMutate: async (text: string) => commentEntity.registerPending(text),
    onSuccess: (newComment: IComment, text: string) => commentEntity.addToCache(newComment, text),
    onError: (_err, text: string) => commentEntity.clearPending(text),
  });

  return { addComment, isPending };
}
