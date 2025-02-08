import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const Formulario = ({ Tarea, onSave }) => {
  const [TareasText, setTareasText] = useState('');

  useEffect(() => {
    if (Tarea) {
      setTareasText(Tarea.text);
    }
  }, [Tarea]);

  const guardar = () => {
    if (TareasText.trim() === '') {
      alert('Por favor, ingresa una descripción de la tarea');
      return;
    }
    onSave(TareasText); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{Tarea ? 'Editar Tarea' : 'Agregar Tarea'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe aquí tu tarea"
        value={TareasText}
        onChangeText={setTareasText}
      />
      <Button title={Tarea ? 'Guardar Cambios' : 'Agregar Tarea'} onPress={guardar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default Formulario;
