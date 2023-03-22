import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { CATEGORIES, MEALS } from '../data/data'
import MealItem from '../components/MealItem'
import { useSelector } from 'react-redux'

export default function FavoriteScreen({navigation}) {
    const myFavMealsId = useSelector((state) => state.favMeals.meals)
    const meals = MEALS.filter((item) => {
        if(myFavMealsId.includes(item.id)){
            return item
        }
    })
    
  return (
    <FlatList data={meals} keyExtractor={(item) => item.id}
        renderItem={(itemData) => {
              const item = itemData.item
              const mealProps = {
                id : item.id,
                title : item.title,
                imageUrl : item.imageUrl,
                affordability : item.affordability,
                complexity : item.complexity,
                duration : item.duration
              }  

            return (<MealItem {...mealProps}  />)
        }}
    />

  )
}

const styles = StyleSheet.create({})