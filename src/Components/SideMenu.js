import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native'
import { List, ListItem } from 'native-base' 

export default SideMenu = props => {

  let { container, imageUser } = styles;
  return (
    <SafeAreaView style={container}>
      <View style={imageUser}>
        <Image
          source={require('../../assets/logo.png')}
          style={{ height: 120, width: 120, borderRadius: 60 }} />
      </View>
      <ScrollView> 
        <List>
          <ListItem onPress={() => props.navigation.navigate('Home')}>
            <Text style={{color: "#F4BC33"}}>Inicio</Text>
          </ListItem>
          <ListItem onPress={() => props.navigation.navigate('Login')}>
            <Text style={{color: "#F4BC33"}}>Login</Text>
          </ListItem>
      
        </List>

      </ScrollView>
 
      <List>
        <ListItem noBorder onPress={() => props.navigation.navigate('Home')}>
          <Text>Sair</Text>
        </ListItem>
      </List>

    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  
  },
  imageUser: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center'
  }
})