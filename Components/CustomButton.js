import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
export default function CustomButton({ title, pressFunction }) {
    const styles = StyleSheet.create({
        container: {
            width: 200,
            alignContent: 'center',
            justifyContent: 'center'
        },
        pressable: {
            textAlign: 'center',
            margin: 10
        },
        title: {
            color: 'white',
            backgroundColor: '#483D8B',
            // alignItems: 'center',
            height: 30,
            width: 200,
            
        }
    });
    return (
        <View style={styles.container}>
            <Pressable
                style={styles.pressable}
                 onPress={pressFunction}
                >
                <Text style={styles.title}>{title}</Text>
            </Pressable>
            {/* <Button titleStyle={styles.title}
                onPress={pressFunction}
                title={title}
                color="#483D8B"
                width="200"
                accessibilityLabel="Novo">
            </Button> */}
        </View>
    )
}