import { Button, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import ModalForm from './ModalForm';
import { useState } from 'react';

export default function Accueil() {

  const [modalVisible,setModalVisible] = useState(false);

  //Pas d'ID, donc lorsqu'on supprime un élément tous les éléments portant le même nom seront supprimés 
  const [courses, setCourses] = useState(["Eau", "Pommes", "Farine"])

  function openModal(){
    setModalVisible(true)
    console.log("open modal");
  }

  function closeModal(){
    setModalVisible(false)
    console.log("close modal")
  }

  function elementPress(i){
    let newTabCourses = courses.filter(element => element != courses[i])
    setCourses(newTabCourses)
  }

  return (
    <View>
      <ModalForm visible={modalVisible} closeModal={closeModal} setCourses={setCourses} courses={courses}/>
      <View style={styles.button}>
        <Button title="Ajouter un article" onPress={openModal}/>
      </View>
      <Text style={styles.monHeader}>Clickez sur un élément pour le supprimer de la liste</Text>

      {/* Pas de FlatList, donc les éléments vont déborder de la page si il y en a trop */}
      {courses.map((element, i) => 
      <Pressable onPress={()=>elementPress(i)} key={i} style={({pressed}) => pressed && styles.pressed}>
        <Text style={styles.monTexte}>{element}</Text>
      </Pressable>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  monTexte: {
    padding : 8,
    margin : 8,
    fontSize: 25,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
    color: "black",
    textAlign:"center"
  },
  monHeader:{
    padding : 8,
    margin : 8,
    fontSize: 20,
    color: "black",
    textAlign:"center"
  },
  pressed:{
    backgroundColor: "red",
    borderRadius:5
  },
  button:{
    margin:10
  }
})