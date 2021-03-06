/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cliente from './src/screens/Cliente';
import ListadoClientes from './src/screens/ListadoClientes';
import EditarCliente from './src/screens/EditarCliente';
import Insurance from './src/screens/Insurance';
import Lorem from './src/screens/Lorem';


const Stack = createStackNavigator();


const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Cliente} />
        <Stack.Screen name="Details" component={ListadoClientes} />
        <Stack.Screen name="Edit" component={EditarCliente} />
        <Stack.Screen name="Insurance" component={Insurance} />
        <Stack.Screen name="Lorem" component={Lorem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
