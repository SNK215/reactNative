import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PageA({ navigation }) {

  return (
    <View>
      <Text>Bienvenue sur l'appli annuaire !</Text>
      <Button title='Profil de Miles Davis' onPress={() => navigation.navigate("PageB", {firstname : "Miles", lastname : "Davis", telephone : "0123456789"})} />
      <Button title='Profil de Richard D. James' onPress={() => navigation.navigate("PageB", {firstname : "Richard D.", lastname : "James", telephone : "0123456789"})} />
      <Button title='Profil de Fédéric Chopin' onPress={() => navigation.navigate("PageB", {firstname : "Frédéric", lastname : "Chopin", telephone : "0123456789"})} />
    </View>
  )
}

const styles = StyleSheet.create({})