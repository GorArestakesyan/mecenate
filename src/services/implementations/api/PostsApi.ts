import { AxiosService } from "../AxiosService";
import { ApiResponse, IPosts, ILikeResponse } from "../../../common/types/api";
import type { FeedTier } from "../../../ui-modules/feed/navigation/types";

export class PostsApi {
  constructor(private axiosService: AxiosService) {}

  async getPosts(cursor?: string, limit = 10, tier?: FeedTier): Promise<IPosts> {
    const params: Record<string, unknown> = { limit };
    if (cursor) params.cursor = cursor;
    if (tier) params.tier = tier;

    const res = await this.axiosService.client.get<ApiResponse<IPosts>>("/posts", { params });
    return res.data.data;
  }

  async toggleLike(postId: string): Promise<ILikeResponse> {
    const res = await this.axiosService.client.post<ApiResponse<ILikeResponse>>(
      `/posts/${postId}/like`,
    );
    return res.data.data;
  }
}
