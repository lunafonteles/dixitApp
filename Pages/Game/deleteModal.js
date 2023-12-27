import React, { useEffect } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import CustomButton from "../../Components/customButton";

export default function DeleteModal(props) {

    useEffect(() => {
    }, []);

    function deletePlayer() {
        props.playerState('DELETE')
        props.closeModal()
    }

    function close() {
        props.closeModal()
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
                    <Text style={styles.title}>Tem certeza que quer excluir o jogador?</Text>
                    <View style={styles.alinhamento}>
                        <CustomButton onPress={() => deletePlayer()} title="Sim" width={80} marginRight={30} />
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
