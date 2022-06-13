import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, Button, View } from 'react-native';
import Home from './screens/home1.js';
import Topics from './screens/topics.js';
import TKonwer1 from './screens/tKonwer1.js';
import Quiz1 from '/Users/adrianwlodarski/AwesomeProject/screens/quiz1.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Topics">
        <Stack.Screen name="Topics" component={Topics}/>
        <Stack.Screen name = "Home" component={Home}/>
        <Stack.Screen name="Tryb konwersacyjny nr 1" component={TKonwer1}/>
        <Stack.Screen name="Quiz nr 1" component={Quiz1}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;