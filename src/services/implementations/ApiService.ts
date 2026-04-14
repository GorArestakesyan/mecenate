import { PostsApi } from "@services/api/PostsApi";
import { AxiosService } from "./AxiosService";

export class ApiService {
  readonly posts: PostsApi;

  constructor(axiosService: AxiosService) {
    this.posts = new PostsApi(axiosService);
  }
}
