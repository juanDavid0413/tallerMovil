import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import Tarea from '../components/Tarea';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const [Tareas, setTareas] = useState([
    { id: '1', text: 'Hacer ejercicio', completed: false },
    { id: '2', text: 'Leer un libro', completed: true },
    { id: '3', text: 'Estudiar React Native', completed: false },
    { id: '4', text: 'Aprender a integrar Tailwind', completed: false },
  ]);

  // funcion para cambiar el estado de la tarea.
  const tareasCompletadas = (TareasId) => {
    setTareas((prevTareas) =>
      prevTareas.map((Tarea) =>
        Tarea.id === TareasId ? { ...Tarea, completed: !Tarea.completed } : Tarea
      )
    );
  };

  //funcion para eliminar tareas
  const eliminarTareas = (TareasId) => {
    setTareas((prevTareas) => prevTareas.filter((Tarea) => Tarea.id !== TareasId));
  };

  //funcion para actualizar tareas
  const actualizarTareas = (updatedTask) => {
    setTareas((prevTareas) =>
      prevTareas.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  };

  //funcion para añadir tareas 
  const añadirTareas = (newTaskText) => {
    const newTask = {
      id: Math.random().toString(),
      text: newTaskText,
      completed: false,
    };
    setTareas((prevTareas) => [...prevTareas, newTask]);
  };

  //funcion para ir al Formulario a añadir o a eliminar una tarea
  const irAFormulario = (Tareas = null) => {
    navigation.navigate('Form', { Tareas, actualizarTareas, añadirTareas });
  };

  //funciones para filtrar tareas completadas y pendientes
  const pendingTareas = Tareas.filter((Tarea) => !Tarea.completed);
  const completedTareas = Tareas.filter((Tarea) => Tarea.completed);

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/236x/64/ec/83/64ec83f347aad4cc838680712d5344c2.jpg' }}
      style={styles.container}
    >
      <View style={styles.sectionContainer}>
        <Text style={styles.headerText}>Tareas Pendientes:</Text>
        <FlatList
          data={pendingTareas}
          renderItem={({ item }) => (
            <Tarea
              Tarea={item}
              onToggleComplete={tareasCompletadas}
              onDelete={eliminarTareas}
              onEdit={irAFormulario}
              style={{ backgroundColor: 'yellow' }}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.headerText}>Tareas Completadas:</Text>
        <FlatList
          data={completedTareas}
          renderItem={({ item }) => (
            <Tarea
              Tarea={item}
              onToggleComplete={tareasCompletadas}
              onDelete={eliminarTareas}
              onEdit={null} 
              style={{ backgroundColor: 'green' }}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => irAFormulario()}
      >
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContainer: {
    flex: 1,
    width: '100%',
    padding: 20,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    backgroundColor: 'blue',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingButtonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Home;
