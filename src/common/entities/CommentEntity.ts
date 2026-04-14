import { QueryClient, InfiniteData } from "@tanstack/react-query";
import type { IComment, IComments } from "@common/types/api";
import type { IWsCommentAddedEvent } from "@services/implementations/WsService";
import { PostDetailStore } from "../../stores";

export const pendingCommentTexts = new Set<string>();
export const localCommentIds = new Set<string>();

export class CommentEntity {
  constructor(
    private queryClient: QueryClient,
    private store: PostDetailStore,
    private postId: string,
  ) {}

  registerPending(text: string) {
    pendingCommentTexts.add(text);
  }

  clearPending(text: string) {
    pendingCommentTexts.delete(text);
  }

  addToCache(comment: IComment, text: string) {
    localCommentIds.add(comment.id);
    setTimeout(() => localCommentIds.delete(comment.id), 10_000);

    this.clearPending(text);

    this.queryClient.setQueryData<InfiniteData<IComments>>(["comments", this.postId], (old) => {
      if (!old) return old;
      return {
        ...old,
        pages: old.pages.map((page, index) =>
          index === 0 ? { ...page, comments: [comment, ...page.comments] } : page,
        ),
      };
    });
    this.store.incrementComments();
  }

  handleWsAdded(event: IWsCommentAddedEvent) {
    if (pendingCommentTexts.has(event.comment.text)) return;
    if (localCommentIds.has(event.comment.id)) return;

    this.queryClient.setQueryData<InfiniteData<IComments>>(["comments", this.postId], (old) => {
      if (!old) return old;

      const existingIds = new Set(old.pages.flatMap((p) => p.comments.map((c) => c.id)));
      if (existingIds.has(event.comment.id)) return old;

      return {
        ...old,
        pages: old.pages.map((page, index) =>
          index === 0 ? { ...page, comments: [event.comment, ...page.comments] } : page,
        ),
      };
    });
    this.store.incrementComments();
  }
}
