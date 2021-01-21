
import React, { useState } from 'react'
import { Dimensions, TouchableOpacity, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'

import CustomHeader from '../Components/CustomHeader'
import ComponenteLogin from '../Components/ComponenteLogin'
import ComponenteCadastro from '../Components/ComponenteCadastro'
export var width = Dimensions.get('window').width


export default Login = props => {
    const [loginActive, setLoginActive] = useState(true)

    return (
        <SafeAreaView style={styles.container}>
            <CustomHeader navigation={props.navigation} titulo={props.route.name}/>
            <View style={styles.header}>
                <View style={styles.logo}>
                    <Image
                        source={require('../../assets/logo.png')}
                        style={{ height: 180, width: 300, borderRadius: 60 }} />
                </View>

        
                <View style={styles.headerContent}>
                    <View style={loginActive ? styles.headerContentItemActive : styles.headerContentItem}>
                        <TouchableOpacity
                            style={styles.headerContentItemButton}
                            onPress={() => { setLoginActive(true) }}
                        >
                            <Text style={styles.fontButton}>Entrar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={loginActive ? styles.headerContentItem : styles.headerContentItemActive}>
                        <TouchableOpacity
                            style={styles.headerContentItemButton}
                            onPress={() => { setLoginActive(false) }}
                        >
                            <Text style={styles.fontButton}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.main}>
                {
                    loginActive ?
                        <ComponenteLogin navigation={props.navigation}/>
                        :
                        <ComponenteCadastro />
                }
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
       // justifyContent: 'flex-start'
    },
    header: {
        
    },
    logo: {
        marginBottom: 0,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    headerContentItemButton: {

    },
    headerContentItemActive: {

        width: width / 2,
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomColor: '#F4BC33',
        borderBottomWidth: 3
    },
    headerContentItem: {

        width: width / 2,
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    headerContent: {
        flexDirection: 'row',
        marginTop: 0
    },
    fontButton: {
        color: '#fff',
        fontWeight: 'bold'
    },
    main: {
        
        flex: 3
    },
    
    button2: {
        alignItems: "center",
        backgroundColor: "#F4BC33",
        padding: 20,
        width: '100%',
        borderRadius: 9,
        marginTop: 12

    },

})