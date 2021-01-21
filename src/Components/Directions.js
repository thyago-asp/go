import React, { Component } from 'react'
import MapViewDirections from 'react-native-maps-directions'

export default Directions = ({destination, origin, onReady}) => {
    return (
        <MapViewDirections 
        destination={destination}
        origin={origin}
        onReady={onReady}
        apikey="AIzaSyAZF15rYMOWhkpG1QncYH2tSYjidlwmcJc"
        strokeWidth={3}
        strokeColor="#222"
        />
    )

}