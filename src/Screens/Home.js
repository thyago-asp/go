import React, { useContext } from 'react'
import { TouchableOpacity, Image, SafeAreaView, View, StyleSheet, Text } from 'react-native'
import Context from '../Context/AuthProvider'

export default home = ({ navigation }) => {
    const { authenticated, handleLogin } = useContext(Context);
    console.log(authenticated)
    // handleLogin
    console.log("----------------")

    // console.log(handleLogin)
    return (

        <SafeAreaView style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/logo.png')}
            />

            <View style={styles.fixToText}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Main')}
                >
                    <Text style={styles.fontButton}>Pedir frete</Text>
                </TouchableOpacity>
                {
                    !authenticated ?
                <TouchableOpacity
                    style={styles.button2}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.fontButton}>Login</Text>
                </TouchableOpacity>
                :
                <Text style={styles.fontButton}>Seja bem vindo</Text>
                }
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        // eixo linha / cruzado
        alignItems: 'center',
        backgroundColor: '#000',
        //eixo coluna / principal
        justifyContent: "flex-start"

    },
    logo: {
        width: '100%',
        height: '40%',
    },
    fixToText: {
        width: '90%',
        justifyContent: 'space-between',
        paddingTop: 250,

    },
    button: {
        alignItems: "center",
        backgroundColor: "#F4BC33",
        padding: 20,
        width: '100%',
        borderRadius: 9

    },
    button2: {
        alignItems: "center",
        backgroundColor: "green",
        padding: 20,
        width: '100%',
        borderRadius: 9,
        marginTop: 12

    },
    fontButton: {
        fontSize: 18,
        color: '#fff'
    }
});