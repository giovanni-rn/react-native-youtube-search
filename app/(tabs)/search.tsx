import { useState } from "react";
import { View } from "react-native";
import { VideoItem } from "@/utils/types/VideoItem";
import { getSearchResults } from "@/utils/controllers/SearchResults";
import SearchForm from "@/components/SearchForm";
import VideoList from "@/components/VideoList";

export default function Search() {
  const [query, setQuery] = useState<string>("");
  const [fetchedVideos, setFetchedVideos] = useState<VideoItem[]>([]);

  async function handleSearch() {
    const results = await getSearchResults(query);
    setFetchedVideos(results);
  }

  return (
    <View>
      <SearchForm
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
      />
      <VideoList fetchedVideos={fetchedVideos} />
    </View>
  );
}
