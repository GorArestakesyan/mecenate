export interface IAuthor {
  id: string;
  username: string;
  displayName: string;
  avatarUrl: string;
  bio: string;
  subscribersCount: number;
  isVerified: boolean;
}

export interface IPost {
  id: string;
  author: IAuthor;
  title: string;
  body: string;
  preview: string;
  coverUrl: string;
  likesCount: number;
  commentsCount: number;
  isLiked: boolean;
  tier: "free" | "paid";
  createdAt: string;
}

export interface IPosts {
  posts: IPost[];
  nextCursor: string | null;
  hasMore: boolean;
}

export interface ILikeResponse {
  isLiked: boolean;
  likesCount: number;
}

export interface IComment {
  id: string;
  postId: string;
  author: IAuthor;
  text: string;
  createdAt: string;
  likesCount?: number;
  isLiked?: boolean;
}

export interface IComments {
  comments: IComment[];
  nextCursor: string | null;
  hasMore: boolean;
}

export interface ApiResponse<T> {
  ok: boolean;
  data: T;
}
