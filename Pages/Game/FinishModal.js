import React, { useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, View, TextInput } from "react-native";
import CustomButton from "../../Components/CustomButton";
import { FinishGame, SaveTurn } from "../../Services/PlayerService";

export default function FinishModal(props) {
    useEffect(() => {

    }, []);

    function finishGame() {
        FinishGame().then(data => {
            if (data.length > 1) {
                Alert.alert("Os vencedores são: " + data)
            } else {
                Alert.alert("O vencedor é: " + data[0])
            }
        })
        SaveTurn(null)
        navigation.navigate('Home')
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalVisible}
            onRequestClose={() => {
                props.closeModal()
            }}
        >
            <View style={styles.modalView}>
                <Text style={styles.title}>Tem certeza que quer finalizar o jogo?</Text>
                <View style={styles.alinhamento}>
                    <CustomButton onPress={() => finishGame()} title="Sim" width={80} marginRight={30}/>
                    <CustomButton
                        onPress={() => props.closeModal()}
                        title="Não"
                        width={80}
                        style="grey"
                        marginLeft={30}
                    />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalView: {
        margin: 20,
        backgroundColor: "#FEE5D7",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    alinhamento: {
        flexDirection: "row",
    },
    title: {
        color: "black",
        fontSize: 20,
        marginTop: 10,
        marginBottom: 20,
        textAlign: "center"
    },
});
