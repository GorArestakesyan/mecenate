import { useQuery } from "@tanstack/react-query";
import { useServices } from "../../../providers/ServicesProvider/ServicesProvider";

export function usePostDetail(postId: string) {
  const { apiService } = useServices();

  const query = useQuery({
    queryKey: ["post", postId],
    queryFn: () => apiService.posts.getPost(postId),
    staleTime: 30_000,
  });

  return {
    post: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
    refetch: query.refetch,
  };
}
