import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  const [Tareas, setTareas] = useState([
    { id: "1", text: "Hacer ejercicio", completed: false },
    { id: "2", text: "Leer un libro", completed: true },
    { id: "3", text: "Estudiar React Native", completed: false },
    { id: "4", text: "Aprender a integrar Tailwind", completed: false },
  ]);

  const toggleIcons = (TareasId) => {
    setTareas((prevTareas) =>
      prevTareas.map((Tarea) =>
        Tarea.id === TareasId
          ? { ...Tarea, showIcons: !Tarea.showIcons }
          : { ...Tarea, showIcons: false }
      )
    );
  };

  const tareasCompletadas = (TareasId) => {
    setTareas((prevTareas) =>
      prevTareas.map((Tarea) =>
        Tarea.id === TareasId
          ? { ...Tarea, completed: !Tarea.completed }
          : Tarea
      )
    );
  };

  const añadirTareas = (newtextoTarea) => {
    const newTask = {
      id: Math.random().toString(),
      text: newtextoTarea,
      completed: false,
    };
    setTareas((prevTareas) => [...prevTareas, newTask]);
  };

  const eliminarTareas = (TareasId) => {
    setTareas((prevTareas) =>
      prevTareas.filter((Tarea) => Tarea.id !== TareasId)
    );
  };

  const irAFormulario = () => {
    navigation.navigate("Form", {
      Tareas: null,
      actualizarTareas,
      añadirTareas,
    });
  };

  const actualizarTareas = (updatedTask) => {
    setTareas((prevTareas) =>
      prevTareas.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  };

  const irAFormularioEditar = (tarea) => {
    navigation.navigate("Form", {
      Tareas: tarea,
      actualizarTareas,
      añadirTareas,
      eliminarTareas,
    });
  };

  const pendingTareas = Tareas.filter((Tarea) => !Tarea.completed);
  const completedTareas = Tareas.filter((Tarea) => Tarea.completed);

React.useLayoutEffect(() => {
  navigation.setOptions({
    headerStyle: {
      backgroundColor: "rgba(228, 217, 217, 0.91)",
    },
    headerRight: () => (
      <TouchableOpacity
        style={styles.botonFlotante}
        onPress={() => irAFormulario()}
      >
        <Text style={styles.textoBoton}>Agregar Tarea</Text>
      </TouchableOpacity>
    ),
  });
}, [navigation]);


  return (
    <ImageBackground
      source={{
        uri: "https://i.pinimg.com/236x/0a/9e/36/0a9e3623870b54b2f1b4851e348cc1e4.jpg",
      }}
      style={styles.container}
    >
      <View style={styles.seccionContainer}>
        <Text style={styles.headerText}>Tareas Pendientes:</Text>
        <Text style={styles.textAlerta}>!Presiona una tarea para ver más opciones¡</Text>
        <FlatList
          data={pendingTareas}
          renderItem={({ item }) => (
            <View style={[styles.tareaContainer, styles.tareaPendiente]}>
              <TouchableOpacity
                style={styles.textContainer}
                onPress={() => toggleIcons(item.id)}
              >
                <Text
                  style={styles.textoTarea}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  {item.text}
                </Text>
              </TouchableOpacity>
              {item.showIcons && (
                <View style={styles.iconContainer}>
                  <TouchableOpacity onPress={() => irAFormularioEditar(item)}>
                    <Icon name="edit" size={24} color="#FFEB3B" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => tareasCompletadas(item.id)}>
                    <Icon name="check-circle" size={24} color="#4CAF50" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => eliminarTareas(item.id)}>
                    <Icon name="delete" size={24} color="#F44336" />
                  </TouchableOpacity>
                </View>
              )}
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={styles.seccionContainer}>
        <Text style={styles.headerText}>Tareas Completadas:</Text>
        <FlatList
          data={completedTareas}
          renderItem={({ item }) => (
            <View style={[styles.tareaContainer, styles.tareaCompleta]}>
              <Text style={styles.textoTarea}>{item.text}</Text>
              <View style={styles.iconContainer2}>
                <TouchableOpacity onPress={() => tareasCompletadas(item.id)}>
                  <Icon name="undo" size={24} color="#FFC107" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => eliminarTareas(item.id)}>
                  <Icon name="delete" size={24} color="#F44336" />
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  seccionContainer: {
    flex: 1,
    marginVertical: '3%',
    width: "100%",
    backgroundColor: "rgba(228, 217, 217, 0.91)",
    borderRadius: 15,
    elevation: 5,
    padding: 10,
    shadowColor: "rgba(0, 0, 0, 0.99)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 3,
    shadowRadius: 8,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    color: "#333",
  },
  tareaContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#455A64",
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    minHeight: 50,
  },
  tareaPendiente: {
    backgroundColor: "#455A64",
  },
  tareaCompleta: {
    backgroundColor: "#1B5E20",
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  textoTarea: {
    color: "white",
    fontSize: 16,
    flexShrink: 1, 
    maxWidth: "80%", 
  },
  iconContainer: {
    flexDirection: "row",
    gap: 10,
    width: 100, 
    justifyContent: "space-between",
  },
  iconContainer2: {
    flexDirection: "row",
    gap: 10,
    width: 60, 
    justifyContent: "space-between",
  },
  botonFlotante: {
    position: 'absolute',
    right: '20',
    backgroundColor: "rgba(69, 134, 136, 0.99)",
    borderRadius: 12,
    width: 100,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
  },
  textAlerta: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 1,
    color: "#333",
  },
});

export default Home;
