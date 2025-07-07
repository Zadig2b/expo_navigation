// Importe le composant Tabs de expo-router pour créer une navigation par onglets.
import { Tabs } from "expo-router";
import React from "react";
// Importe Platform pour détecter si l'application tourne sur iOS, Android ou le web.
import { Platform } from "react-native";

// Importe des composants personnalisés utilisés pour la barre d'onglets.
import { HapticTab } from "@/components/HapticTab"; // Un onglet avec feedback haptique.
import TabBarBackground from "@/components/ui/TabBarBackground"; // L'arrière-plan visuel de la barre d'onglets.
// Importe les couleurs définies pour l'application (par exemple, pour les thèmes clair/sombre).
import { Colors } from "@/constants/Colors";
// Importe un hook personnalisé pour savoir si le thème actuel est clair ou sombre.
import { useColorScheme } from "@/hooks/useColorScheme";
// Importe les icônes de la bibliothèque Ionicons, utilisées pour les onglets.
import { Ionicons } from "@expo/vector-icons";

// Ce composant configure la navigation par onglets de l'application.
export default function TabLayout() {
  // Détecte le thème de couleur actuel du système (clair ou sombre).
  const colorScheme = useColorScheme();

  return (
    // Le composant Tabs gère la navigation entre les différents onglets.
    <Tabs
      screenOptions={{
        // Définit la couleur de l'icône et du texte de l'onglet actif en fonction du thème.
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // Cache l'en-tête par défaut pour les écrans des onglets, car la navigation par onglets gère son propre affichage.
        headerShown: false,
        // Utilise un composant personnalisé (HapticTab) pour le bouton de chaque onglet, ajoutant un feedback haptique.
        tabBarButton: HapticTab,
        // Utilise un composant personnalisé (TabBarBackground) pour l'arrière-plan de la barre d'onglets.
        tabBarBackground: TabBarBackground,
        // Styles spécifiques à la barre d'onglets en fonction de la plateforme (iOS, Android).
        tabBarStyle: Platform.select({
          ios: {
            // Sur iOS, la barre d'onglets est positionnée de manière absolue pour permettre un effet de flou derrière elle.
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      {/* Premier onglet: "Accueil" */}
      <Tabs.Screen
        name="accueil" // Le nom de la route pour cet onglet.
        options={{
          title: "Accueil", // Le titre affiché sous l'icône de l'onglet.
          // Fonction qui retourne l'icône pour cet onglet.
          // `color` et `size` sont fournis par React Navigation pour styliser l'icône.
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size ?? 28} color={color} />
          ),
        }}
      />
      {/* Deuxième onglet: "Favoris" */}
      <Tabs.Screen
        name="favoris"
        options={{
          title: "Favoris",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size ?? 28} color={color} />
          ),
        }}
      />
      {/* Troisième onglet: "Utilisateurs" */}
      <Tabs.Screen
        name="utilisateurs"
        options={{
          title: "Utilisateurs",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" size={size ?? 28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
