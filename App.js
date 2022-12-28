import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Pages/Home';
import Rules from './Pages/Rules';
import Players from './Pages/Players';
import Modal from './Pages/Modal';

export default function App() {
  const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
          // options={{title: 'Home'}}
          />
          <Stack.Screen name="Regras" component={Rules} />
          <Stack.Screen name="Jogadores" component={Players} />
          <Stack.Screen name="Modal" component={Modal} />

        </Stack.Navigator>
      </NavigationContainer>
    );
}


