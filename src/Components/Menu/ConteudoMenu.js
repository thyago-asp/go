import React, { useContext, useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import { List, ListItem } from 'native-base'
import Cabecalho from './CabecalhoMenu'
import Context from '../../Context/AuthProvider'

export default ConteudoMenu = (props) => {
    const { singned, handleLogout } = useContext(Context);

    //console.log(Context)
    return (
        <View style={styles.itensMenu}>
            {
                singned ?
                    <List>
                        <ListItem onPress={() => props.navigation.navigate('Home')}>
                            <Text style={{ color: "#F4BC33" }}>Meu perfil</Text>
                        </ListItem>
                        <ListItem onPress={() => props.navigation.navigate('Login')}>
                            <Text style={{ color: "#F4BC33" }}>Relatório de fretes</Text>
                        </ListItem>
                        <ListItem onPress={() => handleLogout()}>
                            <Text style={{ color: "#F4BC33" }}>Sair</Text>
                        </ListItem>
                    </List>
                    :
                    <View style={styles.viewTexto}>
                        <Text style={styles.texto}>
                            As opções do menu estão
                        desabilitadas, para
                        ativa-las, basta entrar, clicando
                        no botão abaixo.
</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => props.navigation.navigate('Login')}
                        >
                            <Text style={styles.fontButton}>Entrar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => props.navigation.navigate('Main')}
                        >
                            <Text style={styles.fontButton}>Simular frete</Text>
                        </TouchableOpacity>
                    </View>
            }
        </View>
    )
}


const styles = StyleSheet.create({
    viewTexto: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        marginLeft: 10
    },
    texto: {
        color: "#FFFF",
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 30
    },
    fontButton: {
        color: "#FFF",
        fontSize: 20
    },
    button: {
        alignItems: "center",
        backgroundColor: "#F4BC33",
        padding: 10,
        width: '90%',
        borderRadius: 9,
        marginTop: 20

    },
    itensMenu: {
        marginTop: 30
    }
})