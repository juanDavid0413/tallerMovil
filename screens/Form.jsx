import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert, ImageBackground } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const Formulario = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { Tareas, actualizarTareas, añadirTareas } = route.params;

  const [TareasText, setTareasText] = useState(Tareas ? Tareas.text : '');

  const guardar = () => {
    if (TareasText.trim() === '') {
      Alert.alert('Error', 'Por favor, ingresa el texto de la tarea.');
      return;
    }

    if (Tareas) {
      const tareaActualizada = { ...Tareas, text: TareasText };
      actualizarTareas(tareaActualizada);
      Alert.alert('Éxito', 'Tarea editada correctamente');
    } else {
      añadirTareas(TareasText);
      Alert.alert('Éxito', 'Tarea agregada correctamente');
    }

    navigation.goBack();
  };

  useEffect(() => {
    if (Tareas) {
      setTareasText(Tareas.text);
    }
  }, [Tareas]);

  return (
    
    <ImageBackground
          source={{ uri: 'https://i.pinimg.com/236x/64/ec/83/64ec83f347aad4cc838680712d5344c2.jpg' }}
          style={styles.container}
    >
      <Text style={styles.header}>{Tareas ? 'Editar Tarea' : 'Agregar Tarea'}</Text>

      <TextInput
        style={styles.input}
        placeholder="Escribe aquí tu tarea"
        value={TareasText}
        onChangeText={setTareasText}
        placeholderTextColor="#9CA3AF"
      />

      <TouchableOpacity style={styles.button} onPress={guardar}>
        <Text style={styles.buttonText}>{Tareas ? 'Guardar Cambios' : 'Agregar Tarea'}</Text>
      </TouchableOpacity>

      {Tareas && (
        <TouchableOpacity
          style={[styles.button, styles.deleteButton]}
          onPress={() => {
            Alert.alert('Confirmación', '¿Estás seguro de que deseas eliminar esta tarea?', [
              {
                text: 'Cancelar',
                style: 'cancel',
              },
              {
                text: 'Eliminar',
                onPress: () => {
                  Alert.alert('Éxito', 'Tarea eliminada correctamente');
                  navigation.goBack();
                },
              },
            ]);
          }}
        >
          <Text style={styles.buttonText}>Eliminar Tarea</Text>
        </TouchableOpacity>
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F9FAFB', 
  },
  header: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
  input: {
    height: 100,
    borderColor: '#D1D5DB',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 16,
    borderRadius: 8,
    fontSize: 18,
    backgroundColor: '#FFFFFF',
    color: '#374151', 
  },
  button: {
    backgroundColor: '#3B82F6', 
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  deleteButton: {
    backgroundColor: '#EF4444', 
  },
});

export default Formulario;
