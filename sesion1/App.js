import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import css from './AppCSS';
import { container, estilosH1 } from './StyleSheet'

export default function App() {
  return (
    <View style={container}>
      <Text style={estilosH1} >Contenido</Text>
      <Text style={css.h1}>Este es un div</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Contenido de párrafo.</Text>
      <StatusBar style="auto" />
    </View>
  );
}
