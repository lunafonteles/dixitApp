import React, { useState, useEffect } from "react";
import { Modal, StyleSheet, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import CustomButton from "../../Components/customButton";

export default function VoteModal(props) {
  const [voteOptions, setVoteOptions] = useState(props.data);
  const [selected, setSelected] = useState('');

  useEffect(() => {
    const sortedData = [...props.data];
    const storytellerIndex = sortedData.findIndex(item => item.storyteller === true);
  
    if (storytellerIndex !== -1) {
      const storytellerItem = sortedData.splice(storytellerIndex, 1);
      sortedData.unshift(...storytellerItem);
    }

    setVoteOptions(sortedData);
  }, [props.data]);

  function voteOnClose() {
    const updatedPlayer = { ...props.playingNow };
    updatedPlayer.voted = selected ? selected : voteOptions[0].name;
    props.updatevoted(updatedPlayer);
    setSelected("")
    props.closeModal();
  }

  function close() {
    props.closeModal();
  }

  const styles = StyleSheet.create({
    modalView: {
      // margin: 20,
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
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    alinhamento: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
    input: {
      backgroundColor: "white",
      width: 250,
      height: 40,
      marginBottom: 20,
      borderRadius: 5,
    },
    btnContainer: {
      width: 250,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    }
  });

  return (
    <Modal 
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        props.closeModal()
      }}
    >
      <View style={styles.container}>
        <View style={styles.modalView}>
          <Picker
            style={styles.input}
            selectedValue={selected}
            onValueChange={(itemValue) => setSelected(itemValue)}
                      >
            {voteOptions.map((option) => (
              <Picker.Item
                label={option.name}
                value={option.name}
                key={option.name}
              />
            ))}
          </Picker>
          <View style={styles.btnContainer}>
            <CustomButton
              onPress={() => voteOnClose()}
              title="Confirmar"
              width={80}
            ></CustomButton>
              <CustomButton
              onPress={() => close()}
              title="Fechar"
              width={80}
              style="grey"
            ></CustomButton>
          </View>
        </View>
      </View>
    </Modal>
  );
};