import React, { useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, View } from "react-native";
import CustomButton from "../../Components/customButton";
import { FinishGame, SaveTurn } from "../../Services/playerService";

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
        props.navigation(true)
    };

    function close() {
        props.closeModal()
        props.navigation(false)
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
                    <Text style={styles.title}>Tem certeza que quer finalizar o jogo?</Text>
                    <View style={styles.alinhamento}>
                        <CustomButton onPress={() => finishGame()} title="Sim" width={80} marginRight={30} />
                        <CustomButton
                            onPress={close}
                            title="Não"
                            width={80}
                            style="grey"
                            marginLeft={30}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 8
    },
    modalView: {
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
