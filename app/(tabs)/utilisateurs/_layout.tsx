// app/(tabs)/accueil/_layout.tsx
import { Stack } from 'expo-router';

export default function AccueilStackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Utilisateurs' }} />
      <Stack.Screen name="utilisateurs" options={{ title: 'Utilisateurs' }} />
    </Stack>
  );
}
