import React from "react";
import { View, Image, Text } from "react-native";
import { VideoItem } from "@/utils/types/VideoItem";
import { Link } from "expo-router";

export default function VideoListCard({ item }: { item: VideoItem }) {
  return (
    <Link replace href={"/video/" + item.video.videoId}>
      <View>
        <Image
          source={{ uri: item.video.thumbnails[0].url }}
          width={192}
          height={108}
        />
      </View>
      <View>
        <Text>{item.video.title}</Text>
        <Text>{item.video.author.title}</Text>
        <Text>
          {Math.ceil(item.video.lengthSeconds / 60)}:
          {item.video.lengthSeconds % 60}
        </Text>
        <Text>{item.video.stats.views} Views</Text>
      </View>
    </Link>
  );
}
