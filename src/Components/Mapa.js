import React, { useState, useEffect, useRef } from 'react';
import { Text, SafeAreaView, StyleSheet, Dimensions, View } from 'react-native'
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';
import MapView, { Marker } from 'react-native-maps'
import Search from './Search'
import { getPixelSize } from '../utils'
import Detalhes from './Detalhes'

export default Mapa = ({navigation}) => {
  const [regionInicial, setRegionInicial] = useState({ latitude: -25.432778, longitude: -49.278610, latitudeDelta: 0.0922, longitudeDelta: 0.0421 })
  const [origem, setOrigem] = useState(null)
  const [destino, setDestino] = useState(null)
  const [regiao, setRegiao] = useState(null)
  const [distancia, setDistancia] = useState(null)
  const [location, setLocation] = useState({ latitude: -25.432778, longitude: -49.278610, latitudeDelta: 0.0922, longitudeDelta: 0.0421 });
  const [rotaDisponivel, setRotaDisponivel] = useState(false)

  const refMap = useRef(null)

  
  // Quando o usuario coloca o seu entendereço ele seta o dentino.
  const setarOrigem = (origemSelecionada) => {
    setOrigem(origemSelecionada)
    setRegiao(origemSelecionada)
    verificarRota()
  }

  const setarDestino = (destinoSelecionado) => {
    setDestino(destinoSelecionado)
    setRegiao(destinoSelecionado)
    verificarRota
  }

  const setarRota = (disponivel) => {
      setRotaDisponivel(false)
  }

  const verificarRota = () => {
    {
      origem && destino ? setRotaDisponivel(true) : setRotaDisponivel(false)
      console.log(origem)
    }
  }
  


  return (
    <SafeAreaView style={styles.container}>
      {
        location === null ?
          <Text>{regionInicial}</Text> :

          regionInicial === null ?
            regionInicial => regiao :
            <MapView
              style={styles.map}
              initialRegion={regionInicial}
              region={regiao}
              ref={refMap}
            >

              {
                origem ?
                  <Marker
                    coordinate={origem} />
                  :
                  <Text></Text>
              }

              {
                destino ?
                  <Marker
                    coordinate={destino} />
                  :
                  <Text></Text>
              }

              {origem && destino ?
                <MapViewDirections
                  origin={origem}
                  destination={destino}
                  apikey="AIzaSyAZF15rYMOWhkpG1QncYH2tSYjidlwmcJc"
                  resetOnChange
                  strokeColor="#000"
                  strokeWidth={3}
                  precision="high"

                  onReady={result => {
                    refMap.current.fitToCoordinates([origem, destino], {
                      animated: true,
                      edgePadding: {
                        top: getPixelSize(50),
                        right: getPixelSize(50),
                        bottom: getPixelSize(200),
                        left: getPixelSize(50),
                      },
                    })
                    setDistancia(Math.floor(result.distance))
                    console.log(result.distance)
                  }}
                />
                : null
              }
            </MapView>
      }

      {
       
       origem && destino ?
          <Detalhes distancia={distancia} navigation={navigation}/> :

        
          <>
            <Search placeholder="Origem da encomenda" margin={0} onLocationSelected={setarOrigem} />
            <Search placeholder="Destino da encomenda" margin={50} onLocationSelected={setarDestino} />
          </>

      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: '#eee8',
  },
  map: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
});