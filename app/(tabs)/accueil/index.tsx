import { Button } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function Accueil() {
  const router = useRouter();

  return (
    <ThemedView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ThemedText type="title" style={{ marginBottom: 20 }}>Accueil Screen</ThemedText>
      <Button
        title="Go to Details"
        onPress={() => router.push("/accueil/details")}
      />
    </ThemedView>
  );
}
