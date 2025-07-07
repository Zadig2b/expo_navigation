import { Button, View } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function Utilisateurs() {
  const router = useRouter();

  return (
    <ThemedView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ThemedText type="title" style={{ marginBottom: 20 }}>Utilisateurs Screen</ThemedText>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Button title="User 1" onPress={() => router.push("/utilisateurs/1")} />
        <Button title="User 2" onPress={() => router.push("/utilisateurs/2")} />
        <Button title="User 3" onPress={() => router.push("/utilisateurs/3")} />
      </View>
    </ThemedView>
  );
}