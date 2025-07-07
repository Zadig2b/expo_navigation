import { Button } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function FavorisDetails() {
  const router = useRouter();

  return (
    <ThemedView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ThemedText type="title" style={{ marginBottom: 20 }}>Favoris Details Screen</ThemedText>
      <Button title="Go Back" onPress={() => router.back()} />
    </ThemedView>
  );
}