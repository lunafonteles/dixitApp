import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Pages/Home";
import Rules from "./Pages/Rules";
import Players from "./Pages/Players/Players";
import Game from "./Pages/Game/Game";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{title: 'Home'}}/>
            <Stack.Screen name="Regras" component={Rules} />
            <Stack.Screen name="Jogadores" component={Players} />
            <Stack.Screen name="Jogo" component={Game} />
          </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaView>
  );
}
