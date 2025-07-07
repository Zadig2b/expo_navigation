// Importe les composants ThemedText et ThemedView pour gérer les thèmes.
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function Details() {
  return (
    // Conteneur principal avec un style centré.
    <ThemedView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* Titre de l'écran de détails. */}
      <ThemedText type="title">Details Screen</ThemedText>
    </ThemedView>
  );
}
