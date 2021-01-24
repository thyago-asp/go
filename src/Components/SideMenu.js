import React, { useContext, useState } from 'react'
import { Text, View, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native'
import { List, ListItem } from 'native-base'
import Context from '../Context/AuthProvider'
import Cabecalho from '../Components/Menu/CabecalhoMenu'
import Conteudo from "./Menu/ConteudoMenu"
import ConteudoMenu from './Menu/ConteudoMenu'
import { Drawer } from 'react-native-paper';


export default SideMenu = (props) => {
  
  
  return (
    
    <SafeAreaView style={styles.container}>
      <View style={styles.imageUser}>
        <Cabecalho />
      </View>
      
      <ConteudoMenu navigation={props}/>
         
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  imageUser: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center'
  }
})