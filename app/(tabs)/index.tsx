import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { VideoItem } from "@/utils/types/VideoItem";
import { getSearchResults } from "@/utils/controllers/SearchResults";
import VideoList from "@/components/VideoList";

export default function Home() {
  const [fetchedVideos, setFetchedVideos] = useState<VideoItem[]>([]);

  useEffect(() => {
    async function fetchHomeFeed() {
      const results = await getSearchResults("Tutoriel React Native");
      setFetchedVideos(results);
    }
    fetchHomeFeed();
  }, []);

  return (
    <View>
      <Text>Home</Text>
      <VideoList fetchedVideos={fetchedVideos} />
    </View>
  );
}
