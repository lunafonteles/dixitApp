import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import background from '../../assets/rules_background.webp'

export default function PartyRules() {
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
                    6 a 12 jogadores. Cada jogador recebe um pino verde e 5 cartas e ao final do turno todos recebem outra carta para repor a que foi usada. O narrador recebe também um pino vermelho.
                </Text>
                <Text></Text>
                <Text style={styles.title}>Narração</Text>
                <Text style={styles.text}>
                    O narrador diz algo (uma palavra, uma frase, uma narração, etc), mas não precisa ter relação com nenhuma de suas cartas.
                    Baseado em sua fala, cada jogador, inclusive o narrador, escolhe uma carta sua que mais se assemelha ao que foi dito.
                </Text>
                <Text></Text>
                <Text style={styles.title}>Votação</Text>
                <Text style={styles.text}>
                    As cartas escolhidas são misturadas e colocadas na mesa pra que todos tentem acertar a carta. O narrador também vota na carta que acredita que vai ser mais votada.
                    Ele também vota com o pino vermelho em uma carta para ser vetada. Ou seja, os votos nessa carta não valem pontos. Os jogadores podem votar em suas próprias cartas.
                </Text>
                <Text></Text>
                <Text style={styles.title}>Pontuação</Text>
                <Text style={styles.text}>
                   Cada jogador ganha pontos igual a quantidade de votos recebidos em suas cartas (inclusive seu próprio voto). O máximo de pontos ganhos é 5. 
                   O jogador que votar sozinho em uma carta não ganha pontos, e os que votarem na carta vetada também não.
                </Text>
            </View>
        </ImageBackground>
    )
}