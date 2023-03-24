import { StyleSheet, View } from 'react-native'
import React from 'react'
import CategoryButton from '../Components/CategoryButton'
import { useSelector } from 'react-redux'

export default function ComposerCategories() {

  const periods = useSelector((state) => state.data.periods)

  return (
    <View style={styles.view}>
      {periods.map((element, key) => <CategoryButton key={key} period={element.name} endpoint={element.endpoint} color={element.color}/>)}
    </View>
  )
}

const styles = StyleSheet.create({
  view:{
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"center",
    alignItems:"center"
  }
})