import React from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; 

const Tarea = ({ Tarea, onToggleComplete, onDelete, onEdit, style }) => {

  const confirmarEliminacion = () => {
    Alert.alert(
      "Eliminar tarea",
      "¿Estás seguro de que deseas eliminar esta tarea?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Eliminar", onPress: () => onDelete(Tarea.id), style: "destructive" },
      ]
    );
  };

  return (
    <View style={[style, styles.container]}>
      <Text style={styles.text}>{Tarea.text}</Text>

      <View style={styles.alternarContenedor}>
        <TouchableOpacity
          style={[
            styles.checkbox,
            { borderColor: Tarea.completed ? 'red' : 'green' },
          ]}
          onPress={() => onToggleComplete(Tarea.id)}
        />
        
        <Text style={styles.alternarTexto}>
          {Tarea.completed ? 'Marcar como pendiente' : 'Marcar como terminada'}
        </Text>
      </View>

      {!Tarea.completed && (
        <TouchableOpacity onPress={confirmarEliminacion} style={styles.iconButton}>
          <Icon name="trash" size={20} color="red" />
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={confirmarEliminacion} style={[styles.iconButton, { right: 10 }]}>
        <Icon name="trash" size={20} color="red" />
      </TouchableOpacity>

      {!Tarea.completed && (
        <TouchableOpacity onPress={() => onEdit(Tarea)} style={[styles.iconButton, { right: 40 }]}>
          <Icon name="edit" size={20} color="blue" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    position: 'relative',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  alternarContenedor: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  alternarTexto: {
    fontSize: 14,
  },
  iconButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default Tarea;
