import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { getVideoInfos } from "@/utils/controllers/VideoInfos";
import { useLocalSearchParams } from "expo-router";
import { VideoInfos } from "@/utils/types/VideoInfos";
import { WebView } from "react-native-webview";

export default function VideoPlayer() {
  const { id } = useLocalSearchParams() as { id: string };
  const [videoInfos, setVideoInfos] = useState<VideoInfos | null>(null);
  const embedUrl = `https://www.youtube.com/embed/${id}`;

  useEffect(() => {
    async function fetchVideoInfos() {
      const results = await getVideoInfos(id);
      setVideoInfos(results);
    }
    fetchVideoInfos();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: embedUrl }} />
      <Text>{videoInfos?.title}</Text>
    </View>
  );
}
