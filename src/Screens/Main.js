import { View } from 'native-base'
import React from 'react'
import { TouchableOpacity, Image, SafeAreaView, StyleSheet, Text } from 'react-native'

import CustomHeader from '../Components/CustomHeader'
import Mapa from '../Components/Mapa'
export default Main = props => {
  
    return (
        <SafeAreaView style={styles.container}>

           <CustomHeader style={styles.header} navigation={props.navigation} titulo={"Go!"} />
            
            <Mapa navigation={props.navigation}/>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'

    },
    logo: {
        width: 30,
        height: 30
     
    },
    header: {
        backgroundColor: 'black',
        flex: 1
    }
})