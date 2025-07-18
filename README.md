# TP Navigation React Native

Ce projet est une mini-application de navigation développée avec Expo et `expo-router`, simulant une application mobile avec plusieurs écrans, une navigation par onglets, une navigation en pile (stack) et une gestion des routes dynamiques.

## Objectifs du Projet

Les objectifs principaux de ce projet étaient de mettre en œuvre les concepts suivants :

*   **Navigation par Onglets (Tabs)** : Implémentation d'une barre d'onglets personnalisée pour naviguer entre les sections principales de l'application.
*   **Navigation en Pile (Stack Navigation)** : Gestion d'une navigation en pile pour permettre aux utilisateurs de naviguer en profondeur dans une section et de revenir en arrière.
*   **Routes Dynamiques** : Création d'une route dynamique pour simuler une "fiche produit" ou un écran de détails, affichant des informations différentes en fonction de l'ID.
*   **Gestion de la Safe Area** : Assurer que le contenu de l'application est correctement affiché et ne chevauche pas les éléments de l'interface utilisateur du système (encoches, barres de statut, etc.).
*   **Thème Clair/Sombre Dynamique** : Intégration d'un mécanisme pour basculer entre un thème clair et un thème sombre, s'adaptant aux préférences de l'utilisateur.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

*   [Node.js](https://nodejs.org/)
*   [npm](https://www.npmjs.com/) (généralement installé avec Node.js)
*   [Expo CLI](https://docs.expo.dev/get-started/installation/) (installez-le globalement : `npm install -g expo-cli`)
*   [VS Code](https://code.visualstudio.com/) ou un autre éditeur de code

## Structure des Dossiers

La structure principale du dossier `app/` est organisée comme suit pour gérer la navigation :

```
app/
├── _layout.tsx             # Layout principal de la navigation par onglets (Tabs)
├── +not-found.tsx          # Écran 404 pour les routes non trouvées
├── (tabs)/                 # Groupe de routes pour la navigation par onglets
│   ├── _layout.tsx         # Layout des onglets (Accueil, Favoris, Utilisateurs)
│   ├── accueil/
│   │   ├── _layout.tsx     # Layout de la pile (Stack) pour l'onglet Accueil
│   │   ├── details.tsx     # Écran de détails pour l'onglet Accueil
│   │   └── index.tsx       # Écran d'accueil principal
│   ├── favoris/
│   │   ├── _layout.tsx     # Layout de la pile (Stack) pour l'onglet Favoris
│   │   ├── details.tsx     # Écran de détails pour l'onglet Favoris
│   │   └── index.tsx       # Écran des favoris
│   └── utilisateurs/
│       ├── _layout.tsx     # Layout de la pile (Stack) pour l'onglet Utilisateurs
│       ├── [id].tsx        # Route dynamique pour les détails d'un utilisateur
│       └── index.tsx       # Écran des utilisateurs
└── favoris/
    ├── details.tsx         # Écran de détails pour les favoris (hors onglets, si applicable)
    └── index.tsx           # Écran des favoris (hors onglets, si applicable)
```

## Installation et Exécution

Suivez ces étapes pour installer et exécuter le projet :

1.  **Cloner le dépôt (si applicable) ou télécharger le projet.**

2.  **Naviguer vers le répertoire du projet** :
    ```bash
    cd myNavigation
    ```

3.  **Installer les dépendances** :
    ```bash
    npm install
    ```

4.  **Démarrer l'application** :
    ```bash
    npx expo start
    ```

    Cela ouvrira un serveur de développement. Vous pouvez ensuite :
    *   Scanner le code QR avec l'application Expo Go sur votre téléphone (Android ou iOS).
    *   Appuyer sur `a` pour ouvrir sur un émulateur Android.
    *   Appuyer sur `i` pour ouvrir sur un simulateur iOS.
    *   Appuyer sur `w` pour ouvrir dans un navigateur web.

## Fonctionnalités Implémentées

*   **Navigation par Onglets** : Trois onglets principaux : Accueil, Favoris, Utilisateurs.
*   **Navigation en Pile** : Chaque onglet gère sa propre pile de navigation, permettant de naviguer vers des écrans de détails et de revenir en arrière.
*   **Route Dynamique** : L'écran `utilisateurs/[id].tsx` affiche des informations spécifiques basées sur l'ID passé en paramètre.
*   **Gestion de la Safe Area** : Utilisation de `SafeAreaView` pour un affichage correct sur différents appareils.
*   **Thème Dynamique** : L'application s'adapte au thème clair ou sombre du système d'exploitation.

## Concepts Couverts

Ce projet illustre l'utilisation des concepts suivants d'`expo-router` et React Native :

*   `Tabs` pour la navigation par onglets.
*   `Stack` pour la navigation en pile.
*   `SafeAreaProvider` et `SafeAreaView` pour la gestion des zones sécurisées.
*   `useRouter` pour la navigation programmatique.
*   `useColorScheme` pour la gestion des thèmes clair/sombre.

## Auteur

[Votre Nom/Pseudo]
