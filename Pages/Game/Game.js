import React, { useState, useEffect } from "react";
import { SectionList, StyleSheet, Text, View, Alert } from "react-native";
import { useRoute } from "@react-navigation/native";
import CustomButton from "../../Components/CustomButton";
import PlayerGame from "./PlayerGame";
import { GetStoryteller, GetOtherPlayers, GetPlayer, ChangeTurn } from "../../Services/PlayerService";
import VoteModal from "./VoteModal";

export default function Game({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [player, setPlayer] = useState({});
  const [storyteller, setStoryteller] = useState(null);
  const [otherPlayers, setOtherPlayers] = useState(null);
  const [turn, setTurn] = useState(1);

  const route = useRoute();

  useEffect(() => {
    GetStoryteller(route.params).then((data) => setStoryteller([data]));
    GetOtherPlayers(route.params).then((data) => setOtherPlayers(data));
    // console.log(player)
  }, [route.params]);

  function finishRound() {
    var haveToVote = [];
    otherPlayers.forEach(element => {
        !element.votado? haveToVote.push(element.name): console.log(element.name, " ja votou")
    });
    if(haveToVote.length > 0) {
        Alert.alert(`Falta votar: ${haveToVote}`);
        return
    }
    setTurn(turn + 1)
    ChangeTurn()

  }

  const openModal = (playerKey) => {
    GetPlayer(playerKey).then((data) => setPlayer(data)) 
    setModalVisible(true);
  }

  const closeModal = () => {
    setModalVisible(false);
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#6673B4",
      height: "100%",
      alignItems: "center",
      paddingVertical: 100,
      paddingHorizontal: 30,
      justifyContent: "flex-start",
    },
    sideBtn: {
      right: -25,
    },
    title: {
      position: "absolute",
      left: -220,
      top: 5,
      fontSize: 25,
      color: "white",
    },
    header: {
      marginTop: 10,
      position: "absolute",
      top: 10,
      right: "15%",
    },
    footer: {
      position: "absolute",
      bottom: 10,
    },
    aux: {
      fontSize: 15,
      alignSelf: "center",
      marginBottom: 10,
    },
    list: {
      // alignItems: "flex-start",
      // height: "100%",
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Turno {turn}</Text>
        </View>
        <View style={styles.sideBtn}>
          <CustomButton
            onPress={() => Alert.alert("Acabou o jogo")}
            title="Finish"
            width={90}
          />
        </View>
      </View>
      <VoteModal modalVisible={modalVisible} closeModal={closeModal} data={route.params.filter((obj) => obj.name != player.name)} playingNow={player} updateVotado={setPlayer}/>

      <View style={styles.list}>
        {storyteller && (
          <SectionList
            sections={[{ title: "Narrador", data: storyteller }]}
            renderItem={({ item, section }) => (
              <>
                <Text style={styles.aux}>{section.title}</Text>
                <PlayerGame onPress={() => {}} item={item} />
              </>
            )}
            keyExtractor={(item) => item.name}
          />
        )}

        {otherPlayers && (
          <SectionList
            sections={[{ title: "Jogadores", data: otherPlayers }]}
            renderItem={({ item }) => 
                <PlayerGame onPress={openModal} item={item}/>}
            keyExtractor={(item) => item.name}
          />
        )}
      </View>

      <View style={styles.footer}>
        {/* <Text style={styles.aux}>Turno 1</Text> */}
        <CustomButton
          onPress={finishRound}
          title="Concluir turno"
        ></CustomButton>
      </View>
    </View>
  );
}
