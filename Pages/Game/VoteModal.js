import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import CustomButton from "../../Components/CustomButton";

const VoteModal = (props) => {
  const [voteOptions, setVoteOptions] = useState(props.data);
  const [selected, setSelected] = useState({});
  // const [players, setPlayers] = useState([]);

  useEffect(() => {
    setVoteOptions(props.data);
  }, [props.data]);

  function voteNow(itemValue) {
    const updatedPlayer = { ...props.playingNow };
    updatedPlayer.votado = itemValue;
    props.updateVotado(updatedPlayer);
    props.closeModal();
  }

  function voteOnClose() {
    const updatedPlayer = { ...props.playingNow };
    updatedPlayer.votado = voteOptions[0].name;
    props.updateVotado(updatedPlayer);
    props.closeModal();
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <View style={styles.container}>
        <View style={styles.modalView}>
          <Picker
            style={styles.input}
            selectedValue={props.playingNow.votado}
            onValueChange={(itemValue) => voteNow(itemValue)}
          >
            {voteOptions.map((option) => (
              <Picker.Item
                label={option.name}
                value={option.name}
                key={option.name}
              />
            ))}
          </Picker>
          <CustomButton
            onPress={() => voteOnClose()}
            title="OK"
            width={80}
          ></CustomButton>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: "black",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  alinhamento: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  title: {
    color: "white",
    marginTop: 10,
  },
  input: {
    backgroundColor: "#FFF",
    width: 250,
    height: 40,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default VoteModal;
