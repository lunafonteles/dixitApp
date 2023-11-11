import React from 'react';
import CustomButton from '../Components/CustomButton';
// import logo from '../assets/logo-clean.png'
import logo from '../assets/logo2-clean.png'
import background from '../assets/home-background.png'

import { StyleSheet, Text, View, StatusBar, Alert, Image, Dimensions, ImageBackground } from 'react-native';
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
      // backgroundColor: '#FEE1E3',
      alignItems: 'center',
      justifyContent: 'center',
    },
    background: {
      flex: 1,
      width: '100%',
      resizeMode: 'stretch',
    },
    title: {
      fontSize: 40,
      color: "white",
      textShadowColor: "#464140",
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 2,
    },
    logo: {
      width: 320,
      height: 320

    }
  });

  return (
    <ImageBackground source={background} style={styles.background}>
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
    </ImageBackground>
  );
}
