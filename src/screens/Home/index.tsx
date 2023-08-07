import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>Nome do evento</Text>
      <Text style={styles.text}>Domingo, 13 de agosto de 2023</Text>
      <StatusBar style="auto" />
    </View>
  );
}