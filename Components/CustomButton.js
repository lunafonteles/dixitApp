import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function CustomButton(props) {
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      borderRadius: 10,
      backgroundColor: props.style ? props.style : "#464140",
      marginBottom: 10
    },
    pressable: {
      width: "100%",
      textAlign: "center",
      margin: 10,
    },
    title: {
        color: "white",
        width: props.width ? props.width : 200,
        textAlign: "center",
    },
  });
  return (
    <View style={styles.container}>
      <Pressable style={styles.pressable} onPress={props.onPress}>
        <Text style={styles.title}>{props.title}</Text>
      </Pressable>
    </View>
  );
}
