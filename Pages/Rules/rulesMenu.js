import React from 'react';
import CustomButton from '../../Components/customButton';
import logo from '../../assets/logo2_clean.png'
import background from '../../assets/home_background.png'
import { StyleSheet, Text, View, StatusBar, Alert, Image, Dimensions, ImageBackground } from 'react-native';
import { GetAllPlayers, GetTurn } from '../../Services/playerService';

export default function RulesMenu({ navigation }) {
  const width = Dimensions.get('screen').width;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
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
            navigation.navigate('Regras')}
          title="Padrão"
        ></CustomButton>
        <CustomButton
          onPress={() =>
            navigation.navigate('Regras-party')}
          title="Pixit Party"
        ></CustomButton>
        <CustomButton
          onPress={() =>
            navigation.navigate('Regras-time')}
          title="Em times"
        ></CustomButton>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}