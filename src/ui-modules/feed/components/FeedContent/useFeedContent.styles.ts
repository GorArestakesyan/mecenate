import { styles } from "./FeedContent.styles";

export const useFeedContentStyles = (isEmpty: boolean) => ({
  contentContainer: isEmpty ? styles.emptyContent : undefined,
});
