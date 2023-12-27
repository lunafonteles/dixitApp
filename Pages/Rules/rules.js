import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import background from '../../assets/rules_background.webp'

export default function Rules() {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: 35,
        },
        background: {
            flex: 1,
            width: '100%',
            resizeMode: 'stretch',
          },
        title: {
            color: 'white',
            fontSize: 20,
            alignSelf: 'flex-start',
            textShadowColor: "#464140",
            textShadowOffset: { width: 2, height: 2 },
            textShadowRadius: 2,
        },
        text: {
            color: 'white',
            fontSize: 15,
            alignSelf: 'flex-start',
            textShadowColor: "#464140",
            textShadowOffset: { width: 2, height: 2 },
            textShadowRadius: 2,
        },
    });
    return (
        <ImageBackground source={background} style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.title}>Início</Text>
                <Text style={styles.text}>
                    Cada jogador recebe um pino verde e 6 cartas e ao final do turno todos recebem outra carta para repor a que foi usada. Caso sejam apenas 3 jogadores, são 7 cartas.
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
        </ImageBackground>
    )
}