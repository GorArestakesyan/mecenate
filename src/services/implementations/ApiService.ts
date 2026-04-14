import { AxiosService } from "./AxiosService";
import { PostsApi } from "./api/PostsApi";

export class ApiService {
  readonly posts: PostsApi;

  constructor(axiosService: AxiosService) {
    this.posts = new PostsApi(axiosService);
  }
}
