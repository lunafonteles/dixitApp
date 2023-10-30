import React from 'react';
import CustomButton from '../Components/CustomButton';
import bgImage from '../assets/pixitbg.png'; 
import { StyleSheet, Text, View, StatusBar, Alert, Image, Dimensions, ImageBackground } from 'react-native';
export default function Home({ navigation }) {

  const loadGame = () => {
    Alert.alert('Function Called...');
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

    },
    backgroundImage: {
      flex: 1,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

  return (
    <ImageBackground source={bgImage} style={styles.backgroundImage}> 
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
    </ImageBackground>
  );

}

