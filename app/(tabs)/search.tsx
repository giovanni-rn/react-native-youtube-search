import { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { Video } from "@/utils/types/Video";
import { fetchSearchResults } from "@/utils/controllers/SearchResults";
import VideoListCard from "@/components/VideoListCard";
import SearchForm from "@/components/SearchForm";

export default function Search() {
  const [query, setQuery] = useState<string>("");
  const [fetchedVideos, setFetchedVideos] = useState<Video[]>([]);

  async function handleSearch() {
    const results = await fetchSearchResults(query);
    setFetchedVideos(results);
  }

  return (
    <View>
      <Text>Search</Text>
      <SearchForm
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
      />
      <FlatList
        data={fetchedVideos}
        renderItem={({ item }) => <VideoListCard item={item} />}
      />
    </View>
  );
}
