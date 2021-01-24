import React, {useState, useContext} from 'react'
import { Dimensions, StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native'

export var width = Dimensions.get('window').width
const logo = require('../../assets/logo.png')
import Context from '../Context/AuthProvider'


export default ComponenteLogin = (props) => {
    
    const { authenticated, handleLogin } = useContext(Context);

     const habilitadoEdicao = false;

   
    return (
        <View style={styles.container}>
            
            <TextInput
                style={styles.input}
                placeholder="Email"
                autoCorrect={false}
                onChangeText={() => { }} 
                disabled={habilitadoEdicao}/>

            <TextInput
                style={styles.input}
                placeholder="Senha"
                autoCorrect={false}
                onChangeText={() => { }} />

            <TouchableOpacity
                style={styles.button}
                onPress={() => { }}
            >
                <Text style={styles.fontButton}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonFacebook}
                onPress={() => handleLogin(props.navigation)}
                disabled={habilitadoEdicao ? true : false }
            >
                <Text style={styles.fontButton}>Facebook</Text>
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
    buttonFacebook: {
        alignItems: "center",
        
        backgroundColor: "#4267B2",
        padding: 20,
        width: "90%",
        borderRadius: 9,
        marginTop: 10,
        
    },
    fontButton: {
        fontSize: 18,
        color: '#fff'
    }
})