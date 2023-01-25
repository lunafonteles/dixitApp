import React, { useState, useEffect } from "react";
import CustomButton from "../../Components/CustomButton";
import AddPlayerModal from "./AddPlayerModal";
import { GetAllPlayers, CreateGame } from "../../Services/PlayerService";
import { FlatList, StyleSheet, Text, View, Alert } from "react-native";
import Player from "./Player";

export default function Players({ navigation }, props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [players, setPlayers] = useState([]);
  const [previousPlayers, setPreviousPlayers] = useState(false);
  const [gameOn, setGameOn] = useState(false);

  async function fetchPreviousPlayers() {
    var arr = await GetAllPlayers();
    if(arr.length > 0) {
      setPlayers(arr);
      setPreviousPlayers(true);
      return
    } 
    Alert.alert("nao tem jogadores")
  }

  useEffect(() => {
    
  }, []);

  const closeModal = () => {
    setModalVisible(false);
  };

  const editPlayer = () => {
    Alert.alert("editar player")
  }

  const startGame = (item) => {
    if(players.length < 3) {
      Alert.alert("Não existem jogadores suficientes")
      return
    }
    CreateGame(players);
    // setgameOn(true);
    navigation.navigate('Jogo', players)
  };

  const styles = StyleSheet.create({
    flatContainer: {
      backgroundColor: "#6673B4",
      height: "100%",
      alignItems: "center",
      paddingVertical: 100,
      paddingHorizontal: 30,
      justifyContent: "flex-start"
    },  
    sideBtn: {
      alignSelf: "flex-end",
      position: "absolute",
      top: 10,
      right: -25,
    },
    description: {
      marginTop: 50,
      marginBottom: -50,
      fontSize: 15
    },

  });
  
  return (
      <FlatList contentContainerStyle={styles.flatContainer}
      data={players} 
      renderItem={({item}) => 
          <Player onPress={editPlayer} item={item} />
      } 
      keyExtractor={({name}) => name}
      ListHeaderComponent={ () => {
        return <>
        <AddPlayerModal modalVisible={modalVisible} closeModal={closeModal} previousPlayers={previousPlayers} setPreviousPlayers={setPreviousPlayers}/>
        <View style={styles.sideBtn}>
          <CustomButton
            onPress={() => setModalVisible(true)}
            title="Adicionar"
            width={90}
          />
        </View>
        </>
      }}
      ListHeaderComponentStyle={{ position: "absolute", top: 10, right:"15%" }}
      ListFooterComponent={() => {
        return <>
          <View>
          <CustomButton
            onPress={fetchPreviousPlayers}
            title="Jogadores Anteriores"
          ></CustomButton>
          <CustomButton onPress={startGame} title="Iniciar"></CustomButton>
        </View>
        </>
      }}
      ListFooterComponentStyle={{ position: "absolute", bottom: 10 }}
      >
      </FlatList>
  );
}
