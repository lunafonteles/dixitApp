import React from "react";
import { View,Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "react-native-vector-icons";
import { DeletePlayer } from "../../Services/PlayerService"

export default function Player (props) {
    const player = {...props.item}

    function deletePlayer(name) {
      DeletePlayer(name);
      props.playerState('DELETE')
    }

    function updatePlayer(name) {
      props.playerState('UPDATE', name)
    }

    const styles = StyleSheet.create({
        tableContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#464140",
            paddingHorizontal: 10,
            minWidth: "100%",
            maxWidth: "100%",
            borderRadius: 10
          },
          tableName: {
            color: "white",
            fontSize: 25,
            lineHeight: 35,
          },
          tableImg: {
            backgroundColor: player.color,
            height: 30,
            marginRight: 10
          }
    });

    return <>
      <TouchableOpacity  style={styles.tableContainer} onPress={() => updatePlayer(player.name)}>
              <Text style={styles.tableName}>{player.name} </Text>
              <View style={{flexDirection: "row"}}>
                <Text style={styles.tableImg}>       </Text>
                <Feather name="trash-2" size={25} color="white" onPress={() => deletePlayer(player.name)}></Feather>
              </View>
      </TouchableOpacity >
      <Text></Text>
    </>
}