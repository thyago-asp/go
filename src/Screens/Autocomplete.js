import React, { Component } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import * as Location from "expo-location";
import { SafeAreaView, ScrollView, View } from 'react-native';

export default Autocomplete = () => {

    return (
        <SafeAreaView keyboardShouldPersistTaps="handled" style={{flex: 1, height: "100%", width: "100%"}}>
            <GooglePlacesAutocomplete
                placeholder='City, street or gym'
                keyboardShouldPersistTaps="handled"
                listUnderlayColor={'transparent'}
                minLength={1}
                listViewDisplayed={'auto'} // Here is the line
                fetchDetails={true}
                renderDescription={row => row.description}
                query={{
                    key: 'AIzaSyAZF15rYMOWhkpG1QncYH2tSYjidlwmcJc',
                    language: 'en', 
                }}
                nearbyPlacesAPI='GooglePlacesSearch'
                GooglePlacesSearchQuery={{
                    rankby: 'distance',
                    types: 'gym',
                }}
                // currentLocation={true}
                currentLocationLabel='Current location'
                filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
                debounce={200}
                style={{flex: 1, height: "100%", width: "100%"}}
            />
        </SafeAreaView>
    )
}
