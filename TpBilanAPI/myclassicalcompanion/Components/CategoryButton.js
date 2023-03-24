import { Image, Pressable, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function CategoryButton({period, endpoint, color}) {

    const navigation = useNavigation()

    return (
        <TouchableOpacity style={[{backgroundColor:color},styles.view]} onPress={() => navigation.navigate("ComposerList", { endpoint : endpoint, period : period })}>
            <Text style={styles.text}>{period}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    view:{
        borderRadius:10,
        height:130,
        width:180,
        margin:10,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        color:"black",
        fontSize:25,
        textAlign:"center"
    }
})