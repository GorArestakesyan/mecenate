import { IPosts, ApiResponse, IPost, ILikeResponse, IComments, IComment } from "@common";
import { AxiosService } from "../implementations/AxiosService";
import { TFeedTier } from "@navigation/types";

export class PostsApi {
  constructor(private axiosService: AxiosService) {}

  async getPosts(cursor?: string, limit = 10, tier?: TFeedTier): Promise<IPosts> {
    const params: Record<string, unknown> = { limit };
    if (cursor) params.cursor = cursor;
    if (tier) params.tier = tier;

    const res = await this.axiosService.client.get<ApiResponse<IPosts>>("/posts", { params });
    return res.data.data;
  }

  async getPost(postId: string): Promise<IPost> {
    const res = await this.axiosService.client.get<ApiResponse<{ post: IPost }>>(
      `/posts/${postId}`,
    );
    return res.data.data.post;
  }

  async toggleLike(postId: string): Promise<ILikeResponse> {
    const res = await this.axiosService.client.post<ApiResponse<ILikeResponse>>(
      `/posts/${postId}/like`,
    );
    return res.data.data;
  }

  async getComments(postId: string, cursor?: string, limit = 20): Promise<IComments> {
    const params: Record<string, unknown> = { limit };
    if (cursor) params.cursor = cursor;

    const res = await this.axiosService.client.get<ApiResponse<IComments>>(
      `/posts/${postId}/comments`,
      { params },
    );
    return res.data.data;
  }

  async addComment(postId: string, text: string): Promise<IComment> {
    const res = await this.axiosService.client.post<ApiResponse<{ comment: IComment }>>(
      `/posts/${postId}/comments`,
      { text },
    );
    return res.data.data.comment;
  }
}
