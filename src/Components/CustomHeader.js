import React from 'react'
import { StyleSheet } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base'



export default CustomHeader = ({navigation, titulo}) => {

  
    const nav = navigation
    // let titulo = props.route.name

    return (
       
            <Header style={{backgroundColor: 'black'}}>
                <Left >
                    
                        
                            <Button transparent onPress={() => nav.openDrawer()}>
                                <Icon name='menu' style={{color: '#F4BC33'}} />
                            </Button>
                           
                    
                </Left>
                <Body>
                    <Title style={{color: 'white'}}>{titulo}</Title>
                </Body>
                <Right>
                    
                </Right>
            </Header>
     
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 1,
        justifyContent: 'center',
        borderColor: 'black',
        
    },
    botaoMenu: {
        width: 30,
        height: 30,
        paddingLeft: 15,

    }
})