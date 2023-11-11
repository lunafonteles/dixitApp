import React, { useState, useEffect } from "react";
import CustomButton from "../../Components/CustomButton";
import AddPlayerModal from "./AddPlayerModal";
import { GetAllPlayers, CreateGame, ResetGameData } from "../../Services/PlayerService";
import { FlatList, StyleSheet, View, Alert } from "react-native";
import Player from "./Player";

export default function Players({ navigation }, props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [players, setPlayers] = useState([]);
  const [previousPlayers, setPreviousPlayers] = useState(false);
  const [editPlayer, setEditPlayer] = useState(0);

  async function fetchPreviousPlayers() {
    var arr = await GetAllPlayers();
    if(arr.length > 0) {
      setPlayers(arr);
      setPreviousPlayers(true);
      return
    } 
    Alert.alert("Não tem jogadores")
  }

  function fetchPlayers() {
    GetAllPlayers().then(res => {
      setPlayers(res) 
    })
  }

  useEffect(() => {
    
  }, []);

  function closeModal() {
    setModalVisible(false);
    fetchPlayers();
  };

  function UpdatePlayerState(state, id) {
    if(state == 'DELETE') {
      fetchPlayers()
    } else if (state = 'UPDATE') {
      setModalVisible(true)
      setEditPlayer(id)
    }
  }

  function addPlayer() {
    setEditPlayer(0)
    setModalVisible(true)
  }

  function startGame() {
    if(players.length < 3) {
      Alert.alert("Não existem jogadores suficientes")
    } else {
      ResetGameData(players).then(res => {
        CreateGame(res);
        navigation.navigate('Jogo', res)
      })
    }
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
          <Player playerState={UpdatePlayerState} item={item} />
      } 
      keyExtractor={({name}) => name}
      ListHeaderComponent={ () => {
        return <>
        <AddPlayerModal modalVisible={modalVisible} closeModal={closeModal} editPlayer={editPlayer} previousPlayers={previousPlayers} setPreviousPlayers={setPreviousPlayers}/>
        <View style={styles.sideBtn}>
          <CustomButton
            onPress={addPlayer}
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
