import React, {useState} from 'react';
import CustomButton from '../Components/CustomButton';
import CustomModal from '../Components/CustomModal';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';

export default function Players({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);

    const closeModal = () => {
        setModalVisible(false);
    };
    
    const loadPlayers = () => {
        Alert.alert('Function Called...');
    }

    const startGame = () => {
        Alert.alert('Function Called...');
    }

    const addPlayer = () => {
        navigation.navigate('Modal')
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#696969',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        title: {
            fontSize: 50,
        },
    });

    return (
        <View style={styles.container}>
            <CustomModal modalVisible={modalVisible} closeModal={closeModal}/>
            <View style={{alignSelf: 'flex-end', marginRight: 10}}>
            <Text></Text>
            <Button onPress={() => setModalVisible(true)}
                title='Adicionar'
                color="#483D8B"
            />
            </View>
            <Text>Você precisa de ao menos 3 jogadores</Text>
            <View>
                <CustomButton
                    pressFunction={loadPlayers}
                    title="Jogadores Anteriores">
                </CustomButton>
                <CustomButton
                    pressFunction={startGame}
                    title="Iniciar">
                </CustomButton>
            </View>
        </View>
    );
}