import React from "react";
import { View,Text, StyleSheet, TouchableOpacity } from "react-native";

export default function PlayerGame (props) {
    const player = {...props.item}

    const styles = StyleSheet.create({
        tableContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "black",
            paddingHorizontal: 10,
            minWidth: "100%",
            maxWidth: "100%",
          },
          tableName: {
            color: "white",
            fontSize: 25,
            lineHeight: 45,
          },
          tableImg: {
            backgroundColor: player.color,
            height: 30,
            width: 35,
            marginRight: 10,
            textAlign: "center",
            color: "white",
            fontSize: 20
          }
    });

    return <>
      <TouchableOpacity style={styles.tableContainer} onPress={() => props.onPress(player.name)}>
              <Text style={styles.tableName}>{player.name} </Text>
              <View style={{flexDirection: "row"}}>
                <Text style={styles.tableImg}>{player.points}</Text>
              </View>
      </TouchableOpacity>
      <Text></Text>
    </>
    
}