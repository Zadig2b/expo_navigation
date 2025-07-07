// Importe le composant Button de React Native pour créer un bouton cliquable.
import { Button } from "react-native";
// Importe le hook useRouter de expo-router, qui permet de naviguer entre les écrans.
import { useRouter } from "expo-router";
// Importe des composants personnalisés (ThemedText et ThemedView) qui s'adaptent au thème de l'application (clair/sombre).
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

// Ce composant représente l'écran d'accueil de l'application.
export default function Accueil() {
  // Initialise l'objet `router` pour pouvoir utiliser ses méthodes de navigation.
  const router = useRouter();

  return (
    // ThemedView est un conteneur qui s'adapte au thème. Les styles sont appliqués pour centrer le contenu.
    <ThemedView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* ThemedText est un composant texte qui s'adapte au thème. Ici, c'est le titre de l'écran. */}
      <ThemedText type="title" style={{ marginBottom: 20 }}>Accueil Screen</ThemedText>
      {/* Un bouton qui, lorsqu'il est pressé, navigue vers l'écran "details" dans la section "accueil". */}
      <Button
        title="Go to Details" // Le texte affiché sur le bouton.
        onPress={() => router.push("/accueil/details")} // La fonction appelée quand le bouton est pressé.
      />
    </ThemedView>
  );
}
