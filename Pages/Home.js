import React from 'react';
import CustomButton from '../Components/CustomButton';
import logo from '../assets/dixit.png'
import { StyleSheet, Text, View, StatusBar, Alert, Image, Dimensions } from 'react-native';
import { GetAllPlayers, GetTurn } from '../Services/PlayerService';
export default function Home({ navigation }) {

  function loadGame() {
    GetTurn().then(res => {
      if(!res) {
        Alert.alert("Não existe um jogo em andamento");
      } else {
        GetAllPlayers().then(players => navigation.navigate('Jogo', players))
      }
    });
  }

  const width = Dimensions.get('screen').width;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#6673B4',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 40,
      color: "#464140"
    },
    logo: {
      width: "100%",
      height: 328/690 * width

    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador</Text>
      <Image source={logo} style={styles.logo}></Image>
      <Text></Text>
      <CustomButton
        onPress={() =>
          navigation.navigate('Jogadores')}
        title="Novo Jogo"
      ></CustomButton>
      <CustomButton
        onPress={loadGame}
        title="Continuar Jogo"
      ></CustomButton>
      <CustomButton
        onPress={() =>
          navigation.navigate('Regras')}
        title="Regras"
      ></CustomButton>
      <StatusBar style="auto" />
    </View>
  );

}

