import { useEffect, useMemo } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { WS_EVENTS } from "@services/implementations/WsService";
import { useServices } from "@services";
import { LikeEntity } from "@common/entities/LikeEntity";
import { CommentEntity } from "@common/entities/CommentEntity";
import { postDetailStore } from "src/stores";

export function useWebSocket(postId: string) {
  const { wsService } = useServices();
  const queryClient = useQueryClient();

  const likeEntity = useMemo(
    () => new LikeEntity(queryClient, postDetailStore, postId),
    [queryClient, postId],
  );

  const commentEntity = useMemo(
    () => new CommentEntity(queryClient, postDetailStore, postId),
    [queryClient, postId],
  );

  useEffect(() => {
    wsService.connect();

    const unsubscribe = wsService.subscribe((event) => {
      if (event.postId !== postId) return;

      if (event.type === WS_EVENTS.LIKE_UPDATED) {
        likeEntity.handleWsUpdate(event);
      }

      if (event.type === WS_EVENTS.COMMENT_ADDED) {
        commentEntity.handleWsAdded(event);
      }
    });

    return () => unsubscribe();
  }, [postId, wsService, likeEntity, commentEntity]);
}
