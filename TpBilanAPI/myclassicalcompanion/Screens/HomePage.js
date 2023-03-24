import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function HomePage({navigation}) {

  return (
    <View style={styles.view}>
      <Text style={styles.title}>Welcome to Classical Music Companion !</Text>
      <Text style={styles.subtitle}>Find all the info you need about composers and their works in one place !</Text>

      <View style={styles.line}></View>

      <TouchableOpacity style={styles.categoryButton} onPress={() => navigation.navigate("ComposerCategories")}>
        <Text style={styles.buttonText}>Composers by Category</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.searchButton} onPress={() => navigation.navigate("SearchComposer")}>
        <Text style={styles.buttonText}>Search by Name</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  view:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center"
  },
  title:{
    color:"black",
    textAlign:"center",
    fontSize:25,
    marginTop:30,
    marginBottom:10
  },
  subtitle:{
    color:"black",
    fontSize:16,
    textAlign:"center",
    marginBottom:40
  },
  line:{
    borderBottomColor:"black",
    borderBottomWidth:2,
    width:100,
    marginBottom:50
  },
  buttonText:{
    color:"white",
    fontSize:25,
    textAlign:"center"
  },
  categoryButton:{
    width:"80%",
    height:150,
    backgroundColor:"#4681f4",
    borderRadius:20,
    justifyContent:"center",
    marginBottom:50
  },
  searchButton:{
    width:"80%",
    height:150,
    backgroundColor:"#5dbea3",
    borderRadius:20,
    justifyContent:"center"
  }
})