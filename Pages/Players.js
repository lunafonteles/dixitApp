import React, { useState, useEffect } from "react";
import CustomButton from "../Components/CustomButton";
import CustomModal from "../Components/CustomModal";
import { GetAllPlayers } from "../Services/PlayerService";
import { Button, StyleSheet, Text, View, Alert } from "react-native";

export default function Players({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [players, setPlayers] = useState([]);

  async function fetchPlayers() {
    var arr = await GetAllPlayers();
    setPlayers(arr);
  }

  useEffect(() => {
    
  }, []);

  const closeModal = () => {
    setModalVisible(false);
  };

  const loadPlayers = () => {
    Alert.alert("Function Called...");
  };

  const startGame = () => {
    console.log(players);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#696969",
      alignItems: "center",
      justifyContent: "space-between",
    },
    title: {
      fontSize: 50,
    },
    tableContainer: {
    //   alignItems: "center",
    //   justifyContent: "space-between",
    },
    tableItem: {
      backgroundColor: "white",
      fontSize: 25,
      width: 150,

    },
  });

  return (
    <View style={styles.container}>
      <CustomModal modalVisible={modalVisible} closeModal={closeModal} />
      <View style={{ alignSelf: "flex-end", marginRight: 10 }}>
        <Text></Text>
        <Button
          onPress={() => setModalVisible(true)}
          title="Adicionar"
          color="#483D8B"
        />
      </View>
      {players.length > 0 ? (
        <View>
          {players.map((p) => (
            <Text key={p.name} style={styles.tableContainer}>
              <Text style={styles.tableItem}>{p.name} </Text>
              <Text style={{ backgroundColor: p.color }}>     </Text>
              {"\n"}
            </Text>
          ))}
        </View>
      ) : (
        <Text>Necessário ao menos 3 jogadores</Text>
      )}

      <View>
        <CustomButton
          onPress={fetchPlayers}
          title="Jogadores Anteriores"
        ></CustomButton>
        <CustomButton onPress={startGame} title="Iniciar"></CustomButton>
      </View>
    </View>
  );
}
