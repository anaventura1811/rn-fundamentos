import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export function Home() {

  const handleAddParticipant = () => {
    console.log('added!');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>Nome do evento</Text>
      <Text style={styles.text}>Domingo, 13 de agosto de 2023</Text>
      <View style={styles.buttonContainer}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor={"#6b6b6b"}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}