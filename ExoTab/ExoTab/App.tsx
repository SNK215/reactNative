import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Components/Home'
import Settings from './Components/Settings'
import Contact from './Components/Contact'

export default function App() {

  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{tabBarIconStyle:{display:"none"}, tabBarLabelPosition:"beside-icon"}}>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Contact" component={Contact}/>
        <Tab.Screen name="Settings" component={Settings}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})