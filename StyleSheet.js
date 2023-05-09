import { StyleSheet } from "react-native";

// Exportar varios objetos de estilos
const container = StyleSheet.create({
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
});

const estilosH1 = StyleSheet.create({
    fontSize: 25,
    color: 'blue'
})

export { container, estilosH1}
