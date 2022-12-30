import React from 'react';
import CustomButton from '../Components/CustomButton';
import { StyleSheet, Text, View, StatusBar, Alert } from 'react-native';
export default function Home({ navigation }) {

  const loadGame = () => {
    Alert.alert('Function Called...');
  }

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
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador Dixit</Text>
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

