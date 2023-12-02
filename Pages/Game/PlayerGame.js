import React, {useState, useEffect} from "react";
import { View,Text, StyleSheet, TouchableOpacity } from "react-native";
import { GetPlayer } from "../../Services/playerService";

export default function PlayerGame (props) {
    const [voted, setVoted] = useState({});

    const player = {...props.item}

    useEffect(() => {
      getVotedColor()
    }, [props.item]);
  

    function getVotedColor() {
      GetPlayer(player.voted).then((data) => {
        setVoted(data)
      })
    }

    const styles = StyleSheet.create({
        tableContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            // alignItems: "center",
            backgroundColor: "#464140",
            paddingHorizontal: 10,
            minWidth: "100%",
            maxWidth: "100%",
            borderRadius: 10,
          },
          tableName: {
            color: "white",
            fontSize: 25,
            lineHeight: 35,
            marginRight: 10,
            marginLeft: 10
          },
          tableImg: {
            height: 30,
            width: 35,
            textAlign: "center",
            color: "white",
            fontSize: 20
          },
          backgorundPlayer: {
            backgroundColor: player.color,
          },
          backgorundVoted: {
            backgroundColor: voted?.color,
          },
          playerContainer: {
            flexDirection: "row",
            alignItems: "center",
          }
    });

    return <>
      <TouchableOpacity style={styles.tableContainer} onPress={() => props.onPress(player.name)}>
              <View style={styles.playerContainer}>
                <Text style={[styles.tableImg, styles.backgorundPlayer]}>{player.points}</Text>
                <Text style={styles.tableName}>{player.name} </Text>
              </View>
              {player.storyteller === false && (
              <View style={styles.playerContainer}>
                <Text style={styles.tableName}>Voto:</Text>
                <Text style={[styles.tableImg, styles.backgorundVoted]}>{player.voted?.charAt(0)}</Text>
              </View>
              )}
      </TouchableOpacity>
      <Text></Text>
    </>
    
}