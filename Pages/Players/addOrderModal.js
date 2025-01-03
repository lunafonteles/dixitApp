import React, { useEffect } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import CustomButton from "../../Components/customButton";

export default function AddOrderModal(props) {

    useEffect(() => {
    }, []);

    function startGame() {
        props.setOrderPlayers(false);
        props.closeModal()
    }

    function close() {
        props.setOrderPlayers(true);
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
                    <Text style={styles.title}>Ordene todos os jogadores ou clique em 'não ordenar'</Text>
                    <View style={styles.alinhamento}>
                        <CustomButton onPress={() => startGame()} title="Não ordenar" width={80} marginRight={30} />
                        <CustomButton
                            onPress={close}
                            title="OK"
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
