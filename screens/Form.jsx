import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const Formulario = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { Tareas, actualizarTareas, añadirTareas, eliminarTareas } =
    route.params;

  const [TareasText, setTareasText] = useState(Tareas ? Tareas.text : "");

  const guardar = () => {
    if (TareasText.trim() === "") {
      Alert.alert("Error", "Por favor, ingresa el texto de la tarea.");
      return;
    }

    if (Tareas) {
      const tareaActualizada = { ...Tareas, text: TareasText };
      console.log("Actualizando tarea:", tareaActualizada);
      actualizarTareas(tareaActualizada);
      Alert.alert("Éxito", "Tarea editada correctamente");
    } else {
      console.log("Agregando tarea:", TareasText);
      añadirTareas(TareasText);
      Alert.alert("Éxito", "Tarea agregada correctamente");
    }

    navigation.goBack();
  };

  useEffect(() => {
    if (Tareas) {
      setTareasText(Tareas.text);
    }
  }, [Tareas]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "rgba(228, 217, 217, 0.91)",
      },
    });
  }, [navigation]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{ flex: 1 }}>
          <ImageBackground
            source={{
              uri: "https://i.pinimg.com/236x/0a/9e/36/0a9e3623870b54b2f1b4851e348cc1e4.jpg",
            }}
            style={styles.container}
            imageStyle={{ borderRadius: 15 }}
          >
            <View style={styles.formContainer}>
              <Text style={styles.header}>
                {Tareas ? "Editar Tarea" : "Agregar Tarea"}
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Escribe aquí tu tarea"
                value={TareasText}
                onChangeText={setTareasText}
                placeholderTextColor="#9CA3AF"
                multiline
              />
              <TouchableOpacity style={styles.button} onPress={guardar}>
                <Text style={styles.buttonText}>
                  {Tareas ? "Guardar Cambios" : "Agregar Tarea"}
                </Text>
              </TouchableOpacity>

              {Tareas && (
                <TouchableOpacity
                  style={[styles.button, styles.buttonEliminar]}
                  onPress={() => {
                    Alert.alert(
                      "Confirmación",
                      "¿Estás seguro de que deseas eliminar esta tarea?",
                      [
                        { text: "Cancelar", style: "cancel" },
                        {
                          text: "Eliminar",
                          onPress: () => {
                            eliminarTareas(Tareas.id);
                            Alert.alert(
                              "Éxito",
                              "Tarea eliminada correctamente"
                            );
                            navigation.goBack();
                          },
                        },
                      ]
                    );
                  }}
                >
                  <Text style={styles.buttonText}>Eliminar Tarea</Text>
                </TouchableOpacity>
              )}
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  formContainer: {
    position: 'absolute',
    top: 100,
    height: '60%',
    width: "100%",
    backgroundColor: "rgba(228, 217, 217, 0.91)",
    borderRadius: 15,
    elevation: 5,
    padding: 15,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  input: {
    height: 150,
    borderColor: "#D1D5DB",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 16,
    borderRadius: 8,
    fontSize: 18,
    backgroundColor: "#FFFFFF",
    color: "#374151",
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "rgba(69, 134, 136, 0.99)",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
    
  },
  buttonText: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  buttonEliminar: {
    backgroundColor: "#EF4444",
  },
});

export default Formulario;