// app/(tabs)/accueil/_layout.tsx
// Importe le composant Stack de expo-router pour gérer la navigation en pile.
import { Stack } from 'expo-router';

export default function AccueilStackLayout() {
  return (
    // Configure la navigation en pile pour l'onglet "Accueil".
    <Stack>
      {/* Écran principal de l'onglet "Accueil". */}
      <Stack.Screen name="index" options={{ title: 'Accueil' }} />
      {/* Écran de détails accessible depuis l'onglet "Accueil". */}
      <Stack.Screen name="details" options={{ title: 'Détails' }} />
    </Stack>
  );
}
