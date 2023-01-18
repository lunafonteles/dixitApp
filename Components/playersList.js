import React from "react";
import { View,Text, StyleSheet, FlatList } from "react-native";

export default function PlayersList ({players}) {

    // const renderItem = ({item: {name, color}}) => 
    //     <Text style={styles.tableContainer}>
    //         <Text style={styles.tableItem}>{name} </Text>
    //         <Text style={{ backgroundColor: color }}>     </Text>
    //         {"\n"}
    //     </Text>

    const styles = StyleSheet.create({
        tableContainer: {
          flexDirection: "row",
          justifyContent: "space-between",
          fontSize: 25,
        //   alignItems: "center",
        //   justifyContent: "space-between",
        },
        tableItem: {
          backgroundColor: "white",
          lineHeight: 45,
          marginRight: 10,
        },
    });

    return (
        <>
        {/* <FlatList data={players} renderItem={renderItem} keyExtractor={({name}) => name}></FlatList> */}
        {players.map((p) => (
        <Text key={p.name} style={styles.tableContainer}>
          <Text style={styles.tableItem}>{p.name} </Text>
          <Text style={{ backgroundColor: p.color}}>     </Text>
          {"\n"}
        </Text>
      ))}
        </>
    )
    
}