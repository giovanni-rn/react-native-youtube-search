import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { Video } from "@/utils/types/Video";
import { fetchSearchResults } from "@/utils/controllers/SearchResults";
import VideoListCard from "@/components/VideoListCard";

export default function Home() {
  const [fetchedVideos, setFetchedVideos] = useState<Video[]>([]);

  useEffect(() => {
    async function fetchHomeFeed() {
      const results = await fetchSearchResults("Zillakami");
      setFetchedVideos(results);
    }
    fetchHomeFeed();
  }, []);

  return (
    <View>
      <Text>Home</Text>
      <FlatList
        data={fetchedVideos}
        renderItem={({ item }) => <VideoListCard item={item} />}
      />
    </View>
  );
}
