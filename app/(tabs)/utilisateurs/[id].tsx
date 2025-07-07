import { Button } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function UserDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  return (
    <ThemedView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ThemedText type="title" style={{ marginBottom: 20 }}>User Details for ID: {id}</ThemedText>
      <Button title="Go Back" onPress={() => router.back()} />
    </ThemedView>
  );
}
