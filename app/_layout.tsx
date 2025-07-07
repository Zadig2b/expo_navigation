// Importe les thèmes clair et sombre de React Navigation pour gérer l'apparence de l'application.
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// Importe useFonts pour charger des polices personnalisées dans l'application.
import { useFonts } from 'expo-font';
// Importe Stack de expo-router pour créer une pile de navigation (comme un historique de pages).
import { Stack } from 'expo-router';
// Importe StatusBar pour contrôler l'apparence de la barre de statut du téléphone (heure, batterie, etc.).
import { StatusBar } from 'expo-status-bar';
// Nécessaire pour les animations dans Expo, assure que les animations fonctionnent correctement.
import 'react-native-reanimated';

// Importe un hook personnalisé pour détecter si le thème du système est clair ou sombre.
import { useColorScheme } from '@/hooks/useColorScheme';

// C'est le composant racine de votre application, il configure la navigation et les thèmes.
export default function RootLayout() {
  // Détecte le thème de couleur actuel du système (clair ou sombre) pour adapter l'interface.
  const colorScheme = useColorScheme();
  // Charge la police personnalisée 'SpaceMono' à partir des assets.
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  // Si la police n'est pas encore chargée, l'application n'affiche rien.
  // Cela évite d'afficher du texte avec une police par défaut avant que la police personnalisée ne soit prête.
  if (!loaded) {
    return null;
  }

  return (
    // ThemeProvider permet de fournir le thème (clair ou sombre) à tous les composants de l'application.
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* Stack est le navigateur principal. Chaque <Stack.Screen> représente une page. */}
      <Stack>
        {/* L'écran '(tabs)' est un groupe de pages qui utilisent une navigation par onglets.
            headerShown: false signifie que ces pages n'auront pas d'en-tête par défaut. */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* L'écran '+not-found' est la page affichée si l'utilisateur tente d'accéder à une route inexistante. */}
        <Stack.Screen name="+not-found" />
      </Stack>
      {/* Configure la barre de statut du téléphone. "auto" adapte la couleur du texte au thème. */}
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
