import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Video } from "@/utils/types/Video";

export default function VideoListCard({ item }: { item: Video }) {
  return (
    <TouchableOpacity onPress={() => console.log(item.video.thumbnails[0].url)}>
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
    </TouchableOpacity>
  );
}
