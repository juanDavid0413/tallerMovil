PROYECTO GESTOR DE TAREAS

DESCRIPCION:

Este es un proyecto desarrollado para dispositivos moviles con React Native, el cual permite a los usuarios gestionar sus actividades o tareas pendientes para llevar un control de si mismas. Esta app cuenta con dos secciones:

1. Seccion Tareas Pendientes: en esta seccion puedes visualizar y gestionar las tareas que aun no has completado.
2. Seccion Tareas Completadas: en esta seccion puedes visualizar y gestionar las tareas que ya completaste.

CARACTERISTICAS:

-Crear tareas
-Editar tareas
-Eliminar tareas
-Marcar tareas como completadas
-Desmarcar tareas completadas y enviarlas de nuevo a 'Tareas Pendientes'

INSTALACION LOCAL:

1. Clona este repositorio en tu terminal con el comando: git clone https://github.com/juanDavid0413/tallerMovil.git
2. Navega al directorio del proyecto: cd tu-repositorio
3. Instala las dependencias:  npm install
4. Inicia la aplicación:  npm start
5. Depura al app desde tu emulador o dispositivo movil

USO:

A). Añadir Tarea Nueva: 
Para añadir una tarea solo debes presionar el boton "Agregar Tarea", ubicado en la parte superior derecha de la pantalla principal, luego escribe tu tarea en el cuadro de texto y para finalizar presiona de nuevo el boton "Agregar Tarea". Tus tareas quedara guardada en la seccion 'Tareas Pendientes'

B). Editar Tarea:
Solo las tareas pendientes pueden ser editadas. Para editar una tarea presiona para seleccionarla, luego aparecera un menu de iconos, presiona el icono de lapiz amarillo; en el cuadro de texto edita tu tarea y luego presiona el boton 'Guadar Cambios' para guardar la tarea editada. Tambien puedes eliminar la tarea presionando el boton rojo 'Eliminar Tarea'

C). Marcar Tarea Pendiente Como Terminada y Desahacer: 
Para marcar una tarea pendiete como eliminada solo desde pulsar para seleccionar la tarea deseada; luego aparecera un menu de iconos, presiona el icono de Chulo Verde; Automaticamente tu tarea pasara a la seccion 'Tareas Terminadas', para deshacer la tarea completada solo debes buscarla en la seccion 'Tareas Terminadas' y presionar el icono de Flecha Amarilla, tu tareas volvera a la seccion 'Tareas Pendientes'

D). Eliminar Tarea: 
-Para eliminar una tarea de la seccion 'Tareas Completadas' solo debes ubicar la tarea y presionar el icono de Basurero Rojo, inmediatamente tu tarea sera eliminada. (Esta accion no tiene reversa).
-Para elimina una tarea de la secicon 'Tareas Pendientes' debes seleccionar la tarea deseada, y en el menu de iconos presionar el icono de Basurero Rojo, inmediatamente tu tarea sera eliminada. (Esta accion no tiene reversa). 


TECNOLOGIAS UTILIZADAS:

-React Native
-Expo Go
-Visual Studio Code
-Git Hub

DEPENDENCIAS DEL PROYECTO:

-"@react-native-masked-view/masked-view": "^0.3.2",
-"@react-native-masked-view/masked-view": "^0.3.2",
-"@react-navigation/native": "^7.0.14",
-"@react-navigation/stack": "^7.1.1",
-"expo": "~52.0.31",
-"expo-status-bar": "~2.0.1",
-"react": "18.3.1",
-"react-native": "0.76.7",
-"react-native-gesture-handler": "^2.23.0",
-"react-native-screens": "^4.6.0",
-"react-native-vector-icons": "^10.2.0"


DESARROLLADO POR:

Juan David Castañeda Vargas
Duvan Santiago Mesa Isaza
Jhon Alexander Mora