import React from 'react'

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Context from '../Context/AuthProvider'

export default Detalhes = (props) => {

    const { authenticated, handleLogin } = useContext(Context);
    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>Simulação de frete</Text>
            <Text style={styles.conteudo}>R$130,00</Text>
            <Text style={styles.conteudo}>{props.distancia} Km</Text>
            {
                authenticated ?
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => props.navigation.navigate('Login')}
                    >
                        <Text style={styles.fontButton}>Solicitar frete</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => props.navigation.navigate('Login')}
                    >
                        <Text style={styles.fontButton}>Realizar login</Text>
                    </TouchableOpacity>


            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 200,
        width: '100%',
        position: "absolute",
        bottom: 0,
        alignItems: "center",
        padding: 20,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#17A11B",
        padding: 20,
        width: '100%',
        borderRadius: 9,
        marginTop: 0
    },
    fontButton: {
        fontSize: 18,
        color: '#fff'
    },
    titulo: {

    },
    conteudo: {
        marginTop: 20
    }
})