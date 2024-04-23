import { FontAwesome } from "@expo/vector-icons";
import { View, TextInput, Pressable, StyleSheet } from "react-native";

export default function SearchForm({
  query,
  setQuery,
  handleSearch,
}: SearchFormProps) {
  return (
    <View style={styles.searchForm}>
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

const styles = StyleSheet.create({
  searchForm: {
    width: "100%",
    margin: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
