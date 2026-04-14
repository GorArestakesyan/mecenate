import { TextStyle } from "react-native";

export const FontFamily = {
  regular: "Manrope_400Regular",
  medium: "Manrope_500Medium",
  semiBold: "Manrope_600SemiBold",
  bold: "Manrope_700Bold",
} as const;

export const Typography = {
  labelSm: {
    fontFamily: FontFamily.medium,
    fontSize: 12,
    lineHeight: 16,
  } as TextStyle,
  labelMd: {
    fontFamily: FontFamily.medium,
    fontSize: 14,
    lineHeight: 20,
  } as TextStyle,
  labelLg: {
    fontFamily: FontFamily.semiBold,
    fontSize: 16,
    lineHeight: 24,
  } as TextStyle,
  body: {
    fontFamily: FontFamily.regular,
    fontSize: 14,
    lineHeight: 20,
  } as TextStyle,
  caption: {
    fontFamily: FontFamily.regular,
    fontSize: 12,
    lineHeight: 16,
  } as TextStyle,

  // Post-specific
  postTitle: {
    fontFamily: FontFamily.bold,
    fontSize: 18,
    lineHeight: 26,
  } as TextStyle,
  postPreview: {
    fontFamily: FontFamily.medium,
    fontSize: 15,
    lineHeight: 20,
  } as TextStyle,
  authorName: {
    fontFamily: FontFamily.bold,
    fontSize: 15,
    lineHeight: 20,
  } as TextStyle,
  paidOverlay: {
    fontFamily: FontFamily.semiBold,
    fontSize: 15,
    lineHeight: 20,
  } as TextStyle,
} as const;
