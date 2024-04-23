import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { VideoItem } from "@/utils/types/VideoItem";
import { Link } from "expo-router";

export default function VideoListCard({ item }: { item: VideoItem }) {
  return (
    <Link
      // @ts-ignore
      href={"/video/" + item.video.videoId}
      style={styles.link}
    >
      <View>
        <Image
          source={{ uri: item.video.thumbnails[0].url }}
          style={styles.image}
        />
      </View>
      <View style={styles.infos}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {item.video.title}
        </Text>
        <Text>{item.video.author.title}</Text>
        <Text>
          {Math.ceil(item.video.lengthSeconds / 60)}:
          {item.video.lengthSeconds % 60}
        </Text>
        <Text>{item.video.stats.views.toLocaleString("fr-FR")} Views</Text>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  link: {
    marginBottom: 10,
    marginRight: 10,
    width: "100%",
  },
  image: {
    borderRadius: 7,
    width: 160,
    height: 90,
    marginRight: 10,
  },
  infos: { margin: 5, maxWidth: 260 },
  title: {
    fontWeight: "bold",
    fontSize: 17,
  },
});
