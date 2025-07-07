import { SafeAreaView, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function FavorisDetails() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Favoris Details Screen</Text>
      <Button title="Go Back" onPress={() => router.back()} />
    </SafeAreaView>
  );
}