import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import background from '../../assets/rules_background.webp'

export default function TeamRules() {
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
                    Cada jogador recebe um pino verde e 4 cartas e ao final do turno todos recebem outra carta para repor a que foi usada.
                    6 a 12 jogadores, devem formar duplas e se sentarem um de frente para o outro.
                </Text>
                <Text></Text>
                <Text style={styles.title}>Narração</Text>
                <Text style={styles.text}>
                    O narrador diz algo e sua dupla entrega uma carta que melhor explica o que foi dito. Os jogadores das outras duplas escolhem quem vai dar a carta.
                    (Só podem conversar na presença de todos e não podem descrever suas cartas nem mostrar)
                </Text>
                <Text></Text>
                <Text style={styles.title}>Votação</Text>
                <Text style={styles.text}>
                    O narrador, seu parceiro e os jogadores que entregaram cartas não votam.
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