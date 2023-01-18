import React from 'react';
import CustomButton from '../Components/CustomButton';
import logo from '../assets/dixit.png'
import { StyleSheet, Text, View, StatusBar, Alert, Image, Dimensions } from 'react-native';
export default function Home({ navigation }) {

  const loadGame = () => {
    Alert.alert('Function Called...');
  }

  const width = Dimensions.get('screen').width;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#48D1CC',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 50,
    },
    logo: {
      width: "100%",
      height: 328/690 * width

    }
  });

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}></Image>
      <Text style={styles.title}>Contador</Text>
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

