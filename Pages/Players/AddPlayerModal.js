import React, { useState, useEffect, useRef } from "react";
import ColorPicker from "react-native-wheel-color-picker";
import {Alert, Modal, StyleSheet, Text, View, TextInput} from "react-native";
import CustomButton from "../../Components/CustomButton";
import { SavePlayer, GetPlayer, clearAsyncStorage, UpdatePlayer } from "../../Services/PlayerService";
import CustomAlert from "../../Components/CustomAlert";

export default function AddPlayerModal(props) {
  const [colorPickerVisible, setColorPickerVisible] = useState(false);
  const [color, setColor] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);

  const textInputRef = useRef(null);

  var player = {
    name: name, color: color
  }

  useEffect(() => {
    if (props.editPlayer !== 0) {
      GetPlayer(props.editPlayer).then(res => {
        setName(res.name);
        setColor(res.color ? res.color : "");
        setColorPickerVisible(!!res.color);
      });
    } else {
      setName("");
      setColor("");
      setColorPickerVisible(false);
    }
  }, [props.editPlayer]);
  

  function closeModalAndReset() {
    setName("");
    setColor("");
    setColorPickerVisible(false);
    props.closeModal();
  }

  function addPlayer(player) {
    if(!player.name) {
      // setMessage("Favor definir um nome")
      // setAlertVisible(true)
      Alert.alert("Favor definir um nome")
      return
    }
    if(props.previousPlayers === false) {
      clearAsyncStorage();
      props.setPreviousPlayers(true)
    } 
    if (props.editPlayer != 0) {
      UpdatePlayer(player)
    } else {
      SavePlayer(player);
    }
      props.closeModal();
  };

  function closeAlert() {
    setAlertVisible(false)
  }

  function AddColor() {
    colorPickerVisible ? setColorPickerVisible(false) : setColorPickerVisible(true)
    if (textInputRef.current) {
      textInputRef.current.blur();
    }
  }

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
          <Text style={styles.title}>Nome</Text>
          <TextInput
          ref={textInputRef}
          style={styles.input}
          onChangeText={setName}
          value={name}
          onFocus={() => setColorPickerVisible(false)} />

          {colorPickerVisible ? (
            <ColorPicker
              color={color}
              onColorChangeComplete={color => setColor(color)}
              thumbSize={30}
              sliderHidden={true}
              row={false}
            />
          ) : null}
          <Text></Text>
          <CustomButton
            onPress={AddColor}
            title={colorPickerVisible ? "Fechar cor" : props.editPlayer ? "Editar cor" : "Adicionar cor"}
            width={120}
            color={colorPickerVisible ? "grey" : "#483D8B"}
          />
          <View style={styles.alinhamento}>
            <CustomButton
              onPress={() => addPlayer(player)}
              title="Salvar"
              width={80}
              marginRight={30}
            >
            </CustomButton>
            <CustomButton
              onPress={() => closeModalAndReset()}
              title="Cancelar"
              width={80}
              style="grey"
              marginLeft={30}
            >
            </CustomButton>
          </View>
        </View>
      </View>
      <CustomAlert visible={alertVisible} onClose={closeAlert} message={message}></CustomAlert>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: "#5465A8",
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
    marginTop: 10
  },
  input: {
    backgroundColor: "#FFF",
    width: 250,
    height: 40,
    marginTop: 10,
    borderRadius: 5,
  },
});
