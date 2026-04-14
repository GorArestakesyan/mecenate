import { makeAutoObservable } from "mobx";
import type { IPost } from "@common/types/api";

export class PostDetailStore {
  likesCount: number = 0;
  isLiked: boolean = false;
  commentsCount: number = 0;
  isWsConnected: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  initFromPost(post: IPost) {
    this.likesCount = post.likesCount;
    this.isLiked = post.isLiked;
    this.commentsCount = post.commentsCount;
  }

  applyLikeUpdate(likesCount: number) {
    this.likesCount = likesCount;
  }

  setIsLiked(isLiked: boolean, likesCount: number) {
    this.isLiked = isLiked;
    this.likesCount = likesCount;
  }

  incrementComments() {
    this.commentsCount += 1;
  }

  setWsConnected(connected: boolean) {
    this.isWsConnected = connected;
  }
}

export const postDetailStore = new PostDetailStore();
