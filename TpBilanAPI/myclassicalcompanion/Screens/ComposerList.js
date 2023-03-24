import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import ComposerOverview from '../Components/ComposerOverview'

export default function ComposerList({navigation, route}) {

  navigation.setOptions({ title: route.params.period  })
  const endpoint = route.params.endpoint
  const [composerData, setComposerData] = useState(null)

    function getComposer(){
        fetch("https://api.openopus.org"+endpoint)
        .then(response => response.json())
        .then(data => setComposerData(data.composers))
        .catch(error => console.error(error))
        }
    
        useEffect(() => {
            getComposer()
        },[])

  return (
    <View style={styles.view}>

      {composerData == null ? <Text style={styles.loadingText}>Loading...</Text> :       
      <FlatList numColumns={2} data={composerData} renderItem={(itemData) => {
          return (<ComposerOverview name={itemData.item.complete_name} birth={itemData.item.birth} death={itemData.item.death} portrait={itemData.item.portrait} epoch={itemData.item.epoch} id={itemData.item.id}/>)
        }}
          keyExtractor={(item, index) => {return index}}/>
      }

    </View>
  )
}

const styles = StyleSheet.create({
  view:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center", 
    justifyContent:"center",
    paddingTop:10
  },
  loadingText:{
    fontSize:25
  }
})