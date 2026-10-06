import React from 'react';
import { View, Button, StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Figuras from './src/pages/Figuras';
import Historia from './src/pages/Historia';
import Sobre from './src/pages/Sobre';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={{ uri: 'https://images.pexels.com/photos/38125787/pexels-photo-38125787.jpeg' }}
      style={styles.homeContainer}
      resizeMode="cover"
    >
      <Button
        title="Figuras"
        onPress={() => navigation.navigate('Figuras')}
      />
      <View style={styles.spacer} />
      <Button
        title="Historia"
        onPress={() => navigation.navigate('Historia')}
        />
        <View style={styles.spacer} />
      <Button
        title="Sobre"
        onPress={() => navigation.navigate('Sobre')}
      />
    </ImageBackground>
  );
}

function FigurasHistoricasScreen() {
  return <Figuras />;
}

function HistoriaScreen() {
  return <Historia />;
}

function SobreScreen() {
  return <Sobre />;
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Curiosidades Sobre Figuras Historicas' }} />
        <Stack.Screen name="Figuras" component={FigurasHistoricasScreen} options={{ title: 'As figuras mais historicas do mundo!' }} />
        <Stack.Screen name="Historia" component={HistoriaScreen} options={{ title: 'Historia de cada um!' }} />
        <Stack.Screen name="Sobre" component={SobreScreen} options={{ title: 'Sobre nós!' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  spacer: {
    height: 15,
  },
});