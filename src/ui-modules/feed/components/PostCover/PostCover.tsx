import React from "react";
import { Image, View } from "react-native";
import { styles } from "./PostCover.styles";
import { PaidOverlay } from "../PaidOverlay";

interface IPostCoverProps {
  uri: string;
  isPaid?: boolean;
}

const PostCover = ({ uri, isPaid }: IPostCoverProps) => {
  return (
    <View>
      {isPaid && <PaidOverlay />}
      <Image source={{ uri }} style={styles.image} resizeMode="cover" />
    </View>
  );
};

export default PostCover;
