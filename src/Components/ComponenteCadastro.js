import React from 'react'
import { Dimensions, StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native'

export var width = Dimensions.get('window').width
const logo = require('../../assets/logo.png')



export default ComponenteCadastro = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nome completo"
                autoCorrect={false}
                onChangeText={() => { }} />

            <TextInput
                style={styles.input}
                placeholder="Email"
                autoCorrect={false}
                onChangeText={() => { }} />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                autoCorrect={false}
                onChangeText={() => { }} />

            <TextInput
                style={styles.input}
                placeholder="Confirmar senha"
                autoCorrect={false}
                onChangeText={() => { }} />

            <TouchableOpacity
                style={styles.button}
                onPress={() => { }}
            >
                <Text style={styles.fontButton}>Login</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 35
    },
    input: {
        backgroundColor: 'white',
        width: "90%",
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#F4BC33",
        padding: 20,
        width: "90%",
        borderRadius: 9

    },

    fontButton: {
        fontSize: 18,
        color: '#fff'
    }
})