import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ModalInput from './ModalInput'
import Article from './Article'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Liste() {

    const [modalIsVisible,setModalIsVisible] = useState(false) // state pour ma modal
    const [articles,setArticles] = useState([])

    function openModale(){
        console.log("clique sur bouton ajouter article")
        setModalIsVisible(true)
    }

    function closeModale(){
        console.log("clique sur bouton de ma modal pour fermer ma modal")
        setModalIsVisible(false)
    }

    function addArticle(article){
     // console.log("Ajout d'un articles à ma liste : "+article)
      setArticles(articlesCurrent => [
        ...articlesCurrent,
        { text : article , id : Math.random().toString()}
      ])
     setModalIsVisible(false) // closeModale()
    }

    function deleteArticle(id) {
        console.log("il faut delete l'article avec l'id : "+id)
        setArticles((articlesCurrent) => {
          return articlesCurrent.filter((item) => item.id != id)
        })
    }

    const loadArticles = async() => {
      try {
        maValue = await AsyncStorage.getItem("key")
        setArticles([...articles,JSON.parse(maValue)])
        console.log(articles);
      } catch {
        console.log(error);
      }
    }

  return (
    <View style={styles.container}>
        <Button title='Ajouter Article' onPress={openModale}/>
        <Button title="Charger Articles" onPress={loadArticles}/>
        <ModalInput visible={modalIsVisible} closeModale={closeModale} addArticle={addArticle}/>
        <FlatList data={articles} renderItem={(itemData) => {
          return (
            <Article text={itemData.item.text} id={itemData.item.id} item={itemData.item} deleteArticle={deleteArticle}/>
          )
        }} keyExtractor={(item,index) => {
          return item.id
        }}></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        paddingTop : 20,
        paddingHorizontal : 16, 
    }
})