import React, { useContext } from 'react'
import { View, Text, Image } from 'react-native'
import Context from '../../Context/AuthProvider'

export default Cabecalho = () => {

    const { usuario, singned } = useContext(Context);
    //console.log(Context)
    return (
        <View>
            {
                singned ?
                    <>
                        <Image
                            source={{ uri: usuario.picture.data.url }}
                            style={{ height: 120, width: 120, borderRadius: 60 }} />

                            <Text style={{ color: "#F4BC33", marginTop: 20 }}> Olá {usuario.name}</Text>
                    </>
                    :
                    <Image
                        source={require('../../../assets/logo.png')}
                        style={{ height: 200, width: 200, borderRadius: 60, marginTop: 20 }} />
            }
        </View>
    )
}