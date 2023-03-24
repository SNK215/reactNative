import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomePage from './Screens/HomePage'
import ComposerCategories from './Screens/ComposerCategories'
import ComposerList from "./Screens/ComposerList"
import { Provider } from 'react-redux'
import { store } from './store/store'
import SearchComposer from './Screens/SearchComposer'
import WorksList from './Screens/WorksList'
import WorkDetails from './Screens/WorkDetails'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
              <Stack.Navigator initialRouteName='HomePage'>
                  <Stack.Screen name="HomePage" component={HomePage} options={{headerShown : false}}/>
                  <Stack.Screen name="ComposerCategories" component={ComposerCategories} options={{title : "Composers by Category"}}/>
                  <Stack.Screen name="ComposerList" component={ComposerList} options={{title : "Composers by Category"}}/>
                  <Stack.Screen name="SearchComposer" component={SearchComposer} options={{title : "Seach Composer"}}/>
                  <Stack.Screen name="WorksList" component={WorksList} options={{title : "Works List"}}/>
                  <Stack.Screen name="WorkDetails" component={WorkDetails} options={{title : "Works Details"}}/>
              </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({})