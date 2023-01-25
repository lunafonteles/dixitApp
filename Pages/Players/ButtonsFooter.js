import React, { useState } from "react";
import { View } from "react-native";
import CustomButton from "../../Components/CustomButton";
import { GetAllPlayers } from "../../Services/PlayerService";

export default function ButtonsFotter() {
    const [players, setPlayers] = useState([]);
    const [previousPlayers, setPreviousPlayers] = useState(false);

    async function fetchPreviousPlayers() {
        var arr = await GetAllPlayers();
        if(arr.length > 0) {
          setPlayers(arr);
          setPreviousPlayers(true);
          return
        } 
        Alert.alert("Não existem jogadores salvos")
      }

      const startGame = () => {
        Alert.alert("nao esta pronto")
      };

return (<View>
    <CustomButton
      onPress={fetchPreviousPlayers}
      title="Jogadores Anteriores"
    ></CustomButton>
    <CustomButton onPress={startGame} title="Iniciar"></CustomButton>
  </View>)

}