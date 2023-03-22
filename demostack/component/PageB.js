import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PageB({navigation, route}) {
  
  const firstname = route.params.firstname
  const lastname = route.params.lastname
  const telephone = route.params.telephone


  return (
    <View>
      <Text>PageB pour l'utilisateur : {firstname} {lastname}</Text>
      <Text>N° de téléphone : {telephone}</Text>
      <Button title='PageC' onPress={() => navigation.navigate("PageC")} />
    </View>
  )
}

const styles = StyleSheet.create({})