import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function UtilisateurPage() {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profil de l'utilisateur : {id}</Text>
    </View>
  );
}
