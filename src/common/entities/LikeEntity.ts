import { QueryClient, InfiniteData } from "@tanstack/react-query";
import type { IPost, IPosts } from "@common/types/api";
import type { PostDetailStore } from "../../stores/PostDetailStore";
import type { IWsLikeUpdatedEvent } from "@services/implementations/WsService";

const FEED_TIERS = ["all", "free", "paid"] as const;

export class LikeEntity {
  constructor(
    private queryClient: QueryClient,
    private store: PostDetailStore,
    private postId: string,
  ) {}

  optimisticToggle() {
    const prev = { isLiked: this.store.isLiked, likesCount: this.store.likesCount };
    const newIsLiked = !prev.isLiked;
    const newCount = newIsLiked ? prev.likesCount + 1 : prev.likesCount - 1;
    this.store.setIsLiked(newIsLiked, newCount);
    return { prev };
  }

  rollback(prev: { isLiked: boolean; likesCount: number }) {
    this.store.setIsLiked(prev.isLiked, prev.likesCount);
  }

  confirm(data: { isLiked: boolean; likesCount: number }) {
    this.store.setIsLiked(data.isLiked, data.likesCount);
    this.updatePostDetailCache({ likesCount: data.likesCount });
    this.updateFeedCache({ isLiked: data.isLiked, likesCount: data.likesCount });
  }

  handleWsUpdate(event: IWsLikeUpdatedEvent) {
    this.store.applyLikeUpdate(event.likesCount);
    this.updatePostDetailCache({ likesCount: event.likesCount });
    this.updateFeedCache({ likesCount: event.likesCount });
  }

  private updatePostDetailCache(fields: { likesCount: number }) {
    this.queryClient.setQueryData<IPost>(["post", this.postId], (old) =>
      old ? { ...old, ...fields } : old,
    );
  }

  private updateFeedCache(fields: { likesCount: number; isLiked?: boolean }) {
    for (const tier of FEED_TIERS) {
      this.queryClient.setQueryData<InfiniteData<IPosts>>(["feed", tier], (old) => {
        if (!old) return old;
        return {
          ...old,
          pages: old.pages.map((page) => ({
            ...page,
            posts: page.posts.map((post) =>
              post.id === this.postId ? { ...post, ...fields } : post,
            ),
          })),
        };
      });
    }
  }
}
