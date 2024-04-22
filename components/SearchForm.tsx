import { FontAwesome } from "@expo/vector-icons";
import { View, TextInput, Pressable } from "react-native";

export default function SearchForm({
  query,
  setQuery,
  handleSearch,
}: SearchFormProps) {
  return (
    <View>
      <TextInput
        placeholder="Rechercher une vidéo..."
        value={query}
        onChangeText={setQuery}
      />
      <Pressable onPress={handleSearch}>
        <FontAwesome size={28} name="search" />
      </Pressable>
    </View>
  );
}

interface SearchFormProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => Promise<void>;
}
