import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {

  const handleAddParticipant = () => {
    console.log('added!');
  }

  const handleParticipantRemove = (name: string) => {
    console.log('participant removed');
  }

  const participants = ['Ana', 'Joana', 'Luisa', 'Matheus', 'Flávio', 'Bia', 'Thiago', 'Cida', 'Val', 'Luis', 'João'];

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
      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => <Participant name={item} onRemove={() => handleParticipantRemove(item)} />}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmpty}>Ninguém chegou no evento ainda? Adicione os participantes à lista de presença</Text>
        )}
      />
    
      <StatusBar style="auto" />
    </View>
  );
}