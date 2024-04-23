import React from "react";
import { View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { WebView } from "react-native-webview";

export default function VideoPlayer() {
  const { id } = useLocalSearchParams() as { id: string };
  const embedUrl = `https://www.youtube.com/embed/${id}`;

  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: embedUrl }} />
    </View>
  );
}
