import React, { Component, useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import * as Location from "expo-location";

export default Search = (props) => {
    const { onLocationSelected } = props
    const [focusEndereco, setFocusEndereco] = useState(false)
  
    return (

        <GooglePlacesAutocomplete
            placeholder={props.placeholder}
            placeholderTextColor="#333"

            onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                //console.log(details.geometry.location)
                onLocationSelected({ latitude: details.geometry.location.lat, longitude: details.geometry.location.lng, latitudeDelta: 0.0922, longitudeDelta: 0.0421 })
            }}
            query={{
                key: 'AIzaSyAZF15rYMOWhkpG1QncYH2tSYjidlwmcJc',
                language: 'pt',
                components: 'country:br',
            }}
            textInputProps={{
                autoCapitalize: "none",
                autoCorret: false,
                onfocus: () => { setFocusEndereco(true)},
                onblur:  () => { setFocusEndereco(false)},
            }}
            
            listViewDisplayed={focusEndereco}
            keyboardShouldPersistTaps="handled"
            fetchDetails
            enablePoweredByContainer={false}
            
            styles={{
                container: {
                    position: 'absolute',
                    top: 10,
                    width: "100%",
                    
                },
                textInputContainer: {
                    flex: 1,
                    backgroundColor: 'trasparent',
                    height: 54,
                    marginHorizontal: 15,
                    borderTopWidth: 0,
                    borderBottomWidth: 0,
                    marginTop: props.margin
                },
                textInput: {
                    height: 45,
                    margin: 0,
                    paddingBottom: 0,
                    paddingLeft: 20,
                    paddingTop: 0,
                    paddingRight: 0,
                    elevation: 5,
                    shadowColor: '#000',
                    shadowOpacity: 0.1,
                    shadowOffset: { x: 0, y: 0 },
                    shadowRadius: 15,
                    borderWidth: 1,
                    borderColor: "#DDD",
                    fontSize: 13,
                    
                },
                listView: {
                    borderWidth: 1,
                    borderColo: '#DDD',
                    backgroundColor: '#FFF',
                    marginHorizontal: 20,
                    elevation: 5,
                    shadowColor: '#000',
                    shadowOpacity: 0.1,
                    shadowOffset: { x: 0, y: 0 },
                    shadowRadius: 15,

                },
                description: {
                    fontSize: 13
                },
                row: {

                }
            }}
        />

    )
}
