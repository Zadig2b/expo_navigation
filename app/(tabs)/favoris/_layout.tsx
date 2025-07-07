// app/(tabs)/accueil/_layout.tsx
import { Stack } from 'expo-router';

export default function AccueilStackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Favoris' }} />
      <Stack.Screen name="favoris" options={{ title: 'Favoris' }} />
    </Stack>
  );
}
