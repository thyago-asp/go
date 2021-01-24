import React, { Component, useContext } from 'react'
import { View, Text, ListItem, List, Touchable } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default ItemMenu = (props) => {
    console.log(props.nome)
    return (
        <View>
          
          <Text style={{ color: "#F4BC33" }}>{props.nome}</Text>
        </View>
    )
}

