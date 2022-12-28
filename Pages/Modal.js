import React from 'react';
import { StyleSheet, Text, View, Alert, Pressable, TextInput, Button } from 'react-native';
// import InputColor from 'react-input-color'
import { useState } from 'react';

export default function Modal({ navigation }) {
    //     const [modalVisible, setModalVisible] = useState(false);
    //   return (
    //     <View style={styles.centeredView}>
    //       <Modal
    //         animationType="slide"
    //         transparent={true}
    //         visible={modalVisible}
    //         onRequestClose={() => {
    //           Alert.alert("Modal has been closed.");
    //           setModalVisible(!modalVisible);
    //         }}
    //       >
    //         <View style={styles.centeredView}>
    //           <View style={styles.modalView}>
    //             <Text style={styles.modalText}>Hello World!</Text>
    //             <Pressable
    //               style={[styles.button, styles.buttonClose]}
    //               onPress={() => setModalVisible(!modalVisible)}
    //             >
    //               <Text style={styles.textStyle}>Hide Modal</Text>
    //             </Pressable>
    //           </View>
    //         </View>
    //       </Modal>
    //       <Pressable
    //         style={[styles.button, styles.buttonOpen]}
    //         onPress={() => setModalVisible(true)}
    //       >
    //         <Text style={styles.textStyle}>Show Modal</Text>
    //       </Pressable>
    //     </View>
    //   );
    // };

    // const styles = StyleSheet.create({
    //   centeredView: {
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //     marginTop: 22
    //   },
    //   modalView: {
    //     margin: 20,
    //     backgroundColor: "white",
    //     borderRadius: 20,
    //     padding: 35,
    //     alignItems: "center",
    //     shadowColor: "#000",
    //     shadowOffset: {
    //       width: 0,
    //       height: 2
    //     },
    //     shadowOpacity: 0.25,
    //     shadowRadius: 4,
    //     elevation: 5
    //   },
    //   button: {
    //     borderRadius: 20,
    //     padding: 10,
    //     elevation: 2
    //   },
    //   buttonOpen: {
    //     backgroundColor: "#F194FF",
    //   },
    //   buttonClose: {
    //     backgroundColor: "#2196F3",
    //   },
    //   textStyle: {
    //     color: "white",
    //     fontWeight: "bold",
    //     textAlign: "center"
    //   },
    //   modalText: {
    //     marginBottom: 15,
    //     textAlign: "center"
    //   }
    // });

    const closeModal = () => {
        Alert.alert('Function Called...');
    }

    const addPlayer = () => {
        Alert.alert('Function Called...');
    }

    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent: 'center'
        },
        card: {
            width: 300,
            height: 400,
            padding: 20,
            backgroundColor: '#696969',
            justifyContent: 'space-between',
        },
        title: {
            color: 'white',
        },
        input: {
            backgroundColor: '#FFF',
            width: 250,
            height: 40,
            borderRadius: 5
        },
        // btn: {
        //     width: 30,
        // }
    });

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View>
                    <Text style={styles.title}>Nome</Text>
                    <TextInput style={styles.input}></TextInput>
                    <Text></Text>
                </View>
                <View>
                    <Text style={styles.title}>Color</Text>
                    {/* <InputColor/> */}
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Button style={styles.btn}
                        onPress={closeModal}
                        title='Cancelar'
                        color="#483D8B"
                        width="50"
                    ></Button>
                    <Button style={styles.btn}
                        onPress={addPlayer}
                        title='Adicionar'
                        color="#483D8B"
                        width="50"
                    ></Button>
                </View>
            </View>
        </View>
    );
}