import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Pages/home";
import RulesMenu from "./Pages/Rules/rulesMenu";
import Rules from "./Pages/Rules/rules";
import PartyRules from "./Pages/Rules/partyRules";
import TeamRules from "./Pages/Rules/teamRules";
import Players from "./Pages/Players/players";
import Game from "./Pages/Game/game";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{title: 'Home', headerShown: false} } />
            <Stack.Screen name="Menu-Regras" component={RulesMenu} options={{ headerShown: false }}/>
            <Stack.Screen name="Regras" component={Rules} options={{ headerShown: false }}/>
            <Stack.Screen name="Regras-time" component={TeamRules} options={{ headerShown: false }}/>
            <Stack.Screen name="Regras-party" component={PartyRules} options={{ headerShown: false }}/>
            <Stack.Screen name="Jogadores" component={Players} options={{ headerShown: false }}/>
            <Stack.Screen name="Jogo" component={Game} options={{ headerShown: false }}/>
          </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaView>
  );
}
