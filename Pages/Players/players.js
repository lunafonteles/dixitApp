import React, { useState, useEffect } from "react";
import CustomButton from "../../Components/customButton";
import AddPlayerModal from "./addPlayerModal";
import AddOrderModal from "./addOrderModal";
import { GetAllPlayers, CreateGame, ResetGameData } from "../../Services/playerService";
import { StyleSheet, View, Alert, ImageBackground, SectionList } from "react-native";
import Player from "./player";
import background from '../../assets/players_background.webp'

export default function Players({ navigation }, props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [orderModalVisible, setOrderModalVisible] = useState(false);
  const [players, setPlayers] = useState([]);
  const [previousPlayers, setPreviousPlayers] = useState(false);
  const [editPlayer, setEditPlayer] = useState(0);
  const [orderPlayers, setOrderPlayers] = useState(true);

  async function fetchPreviousPlayers() {
    var arr = await GetAllPlayers();
    if (arr.length > 0) {
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

  }, [editPlayer]);

  function closeModal() {
    setModalVisible(false);
    fetchPlayers();
  };

  function closeOrderModal() {
    setOrderModalVisible(false);
  };

  function UpdatePlayerState(state, id) {
    if (state == 'DELETE') {
      fetchPlayers()
    } else if (state == 'UPDATE') {
      setModalVisible(true)
      setEditPlayer(id)
    } 
  }

  function addPlayer() {
    setEditPlayer(0)
    setModalVisible(true)
  }

  function startGame() {
    if (players.length < 3) {
      Alert.alert("Não existem jogadores suficientes")
    } else {
      if (orderPlayers) {
        const allPlayersHaveOrder = players.every((player) => player && player.order !== null);

        if(allPlayersHaveOrder) {
          ResetGameData(players).then(res => {
            CreateGame(res, orderPlayers);
            navigation.navigate('Jogo', res)
          })
        } else {
          setOrderModalVisible(true)
        }
      } else {
        ResetGameData(players).then(res => {
          CreateGame(res, orderPlayers);
          navigation.navigate('Jogo', res);
        });
      }
    }
  };

  const styles = StyleSheet.create({
    container: {
      height: "100%",
      alignItems: "center",
      paddingVertical: 60,
      paddingHorizontal: 30,
      justifyContent: "flex-start",
    },
    background: {
      flex: 1,
      width: '100%',
      resizeMode: 'stretch',
    },
    sideBtn: {
      alignSelf: "flex-end",
      marginTop: -30,
      marginBottom: 30

    },
    footer: {
      marginTop: 20,
      marginBottom: -40,
      alignItems: "flex-end",
    },
  });

  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.container}>
        <AddPlayerModal modalVisible={modalVisible} closeModal={closeModal} editPlayer={editPlayer} previousPlayers={previousPlayers} setPreviousPlayers={setPreviousPlayers} />
        <AddOrderModal modalVisible={orderModalVisible} closeModal={closeOrderModal} setOrderPlayers={setOrderPlayers}/>
        <View style={styles.sideBtn}>
          <CustomButton
            onPress={addPlayer}
            title="Adicionar"
            width={90}
          />
        </View>
        {players && (
          <SectionList
            sections={[{ title: "Jogadores", data: players }]}
            renderItem={({ item }) =>
              <Player playerState={UpdatePlayerState} item={item} />}
            keyExtractor={(item) => item.name}
          />
        )}
        <View style={styles.footer}>
          <CustomButton
            onPress={fetchPreviousPlayers}
            title="Jogadores Anteriores"
          ></CustomButton>
          <CustomButton onPress={startGame} title="Iniciar"></CustomButton>
        </View>
      </View>
    </ImageBackground>
  );
}