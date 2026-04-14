import React from "react";
import { Image, Text, View } from "react-native";
import type { IAuthor } from "@common/types/api";
import { styles } from "./PostHeader.styles";

interface IPostHeaderProps {
  author: IAuthor;
}

const PostHeader = ({ author }: IPostHeaderProps) => (
  <View style={styles.row}>
    <Image source={{ uri: author.avatarUrl }} style={styles.avatar} />
    <Text style={styles.name} numberOfLines={1}>
      {author.displayName}
    </Text>
  </View>
);

export default PostHeader;
