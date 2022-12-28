import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Rules() {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#48D1CC',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: 35,
        },
        title: {
            fontSize: 20,
            alignSelf: 'flex-start',
        },
        text: {
            fontSize: 15,
            alignSelf: 'flex-start',
        },
    });
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Início</Text>
            <Text style={styles.text}>
                Cada jogador recebe 6 cartas e ao final do turno todos recebem outra carta para repor a que foi usada
            </Text>
            <Text></Text>
            <Text style={styles.title}>Narração</Text>
            <Text style={styles.text}>
                O narrador escolhe uma de suas cartas e explica (uma palavra, uma frase, uma narração, etc).
                Baseado em sua fala, cada jogador escolhe uma carta sua que mais se assemelha ao que foi dito.
            </Text>
            <Text></Text>
            <Text style={styles.title}>Votação</Text>
            <Text style={styles.text}>
                As cartas escolhidas são misturadas com a do narrador e colocadas na mesa pra que todos (menos o narrador) tentem acertar a carta narrada. Não é permitido votar na sua própria carta.
            </Text>
            <Text></Text>
            <Text style={styles.title}>Pontuação</Text>
            <Text style={styles.text}>
                Se a carta do narrador foi escolhida por todos ou nenhum jogador, o narrador não pontua enquanto que todos os outros ganham 2 pontos cada.
                Em outros casos tanto o narrador quanto quem acertou ganha 3 pontos. Além disso, os jogadores que não são o narrador podem ter pontos extras por cada pessoa que votar em suas cartas.
            </Text>
        </View>
    )
}