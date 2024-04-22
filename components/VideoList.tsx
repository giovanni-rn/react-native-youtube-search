import React from "react";
import { FlatList } from "react-native";
import { VideoItem } from "@/utils/types/VideoItem";
import VideoListCard from "./VideoCard";

export default function VideoList({ fetchedVideos }: VideoListProps) {
  return (
    <FlatList
      data={fetchedVideos.filter(
        (item) => item.type === "video" && item.video.thumbnails.length > 0
      )}
      renderItem={({ item }) => <VideoListCard item={item} />}
    />
  );
}

type VideoListProps = { fetchedVideos: VideoItem[] };
