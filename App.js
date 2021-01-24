import { StatusBar } from 'expo-status-bar';
import React, { createContext, useState } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './src/Screens/Home'
import Main from './src/Screens/Main'
import Login from './src/Screens/Login'
import SideMenu from './src/Components/SideMenu'
import AuthProvider from './src/Context/AuthProvider'
import useAuth from './src/Context/useAuth';




const navegacao = NavigationContainer

export default function App() {
  

  const {
    authenticated, handleLogin, handleLogout, user
  } = useAuth();

  const Drawer = createDrawerNavigator()
  
  return (
    <AuthProvider.Provider value={{ singned: authenticated, handleLogin, handleLogout, usuario: user}} >
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => SideMenu(props.navigation)} >
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Main" component={Main} />
          <Drawer.Screen name="Login" component={Login} />
        </Drawer.Navigator>
      </NavigationContainer>     
    </AuthProvider.Provider>
  );
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
  fontButton: {
    fontSize: 18,
    color: '#fff'
  },
  menu: {
    width: 20,
    height: 20
  }
});
