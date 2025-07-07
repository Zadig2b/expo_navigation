import { SafeAreaView, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Favoris() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Favoris Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => router.push("/favoris/details")}
      />
    </SafeAreaView>
  );
}