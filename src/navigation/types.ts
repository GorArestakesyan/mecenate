import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { MaterialTopTabScreenProps } from "@react-navigation/material-top-tabs";
import type { IPost } from "@common/types/api";

export type RootStackParamList = {
  Feed: undefined;
  PostDetail: { postId: string; initialPost: IPost };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  T
>;

export interface IFeedTabConfig {
  readonly name: keyof TFeedTabParamList;
  readonly title: string;
}

export interface IFeedTabConfig {
  readonly name: keyof TFeedTabParamList;
  readonly title: string;
}

export type TFeedTabParamList = {
  All: undefined;
  Free: undefined;
  Paid: undefined;
};

export type TFeedTabScreenProps<T extends keyof TFeedTabParamList> = MaterialTopTabScreenProps<
  TFeedTabParamList,
  T
>;

export type TFeedTier = "free" | "paid";
