import React, { useState } from "react";
import ColorPicker from "react-native-wheel-color-picker";

import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import CustomButton from "./CustomButton";
import { SavePlayer } from "../Services/PlayerService";

const CustomModal = (props) => {
  const [colorPickerVisible, setColorPickerVisible] = useState(false);
  const [color, setColor] = useState("");
  const [name, setName] = useState("");
  var player = {
    name: name, color: color
  }

  const addPlayer = (player) => {
    SavePlayer(player);
    props.closeModal();
  };

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
          <Text style={styles.title}>Nome</Text>
          <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name} />
          <Text style={styles.title}>Color</Text>

          {colorPickerVisible ? (
            <ColorPicker
              color={color}
              onColorChangeComplete={color => setColor(color)}
              thumbSize={30}
              sliderSize={30}
              noSnap={true}
              row={false}
            />
          ) : null}
          <Text></Text>
          <CustomButton
            onPress={() =>
              colorPickerVisible
                ? setColorPickerVisible(false)
                : setColorPickerVisible(true)
            }
            title={colorPickerVisible ? "Fechar cor" : "Add cor"}
            width={90}
            color={colorPickerVisible ? "grey" : "#483D8B"}
          />
          <View style={styles.alinhamento}>
            <CustomButton
              onPress={() => addPlayer(player)}
              title="Salvar"
              width={80}
            >
            </CustomButton>
            <CustomButton
              onPress={() => props.closeModal()}
              title="Cancelar"
              width={80}
              style="grey"
            >
            </CustomButton>
          </View>
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
    // display: "flex",
    color: "white",
    marginTop: 10
    // alignSelf: "flex-start"
  },
  input: {
    backgroundColor: "#FFF",
    width: 250,
    height: 40,
    marginTop: 10,
    borderRadius: 5,
  },
});

export default CustomModal;
