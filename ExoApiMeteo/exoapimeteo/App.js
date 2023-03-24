/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Geolocation from '@react-native-community/geolocation'
import { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default function App() {

  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [localisation, setLocalisation] = useState({pays:"", ville:""})

  function getAPi(){
    fetch(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=DJUJmkivmklSL8wZq1e3BB3xzzGZDTHE&q=${latitude},${longitude}`)
    .then(response => response.json())
    .then(data => setLocalisation({pays:data.Country.LocalizedName, ville:data.LocalizedName}))
    .catch(error => console.error(error))
  }

  useEffect(() => {

    Geolocation.requestAuthorization()
    Geolocation.getCurrentPosition(
        position => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        },
        error => console.log(error),
        {enableHighAccuracy :true, timeout : 20000, maximumAge : 1000 }
    );
},[])



  return(
    <View>
      <Button title="Obtenir infos sur localisation" onPress={()=>getAPi()}/>
      <Text>Latitude : {latitude}</Text>
      <Text>Longitude : {longitude}</Text>
      <Text>Ville : {localisation.ville}</Text>
      <Text>Pays : {localisation.pays}</Text>
    </View>
  )
}
