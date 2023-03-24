import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function WorkOverview({title,subtitle,genre,id}) {

    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={() => navigation.navigate("WorkDetails", {title : title, subtitle, subtitle, genre : genre, id : id})}>
            <View style={styles.view}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.genre}>{genre}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    view:{
        backgroundColor:"#ADD8E6",
        width:"100%",
        margin:5,
        borderRadius:5
    },
    title:{
        color:"black",
        fontSize:17,
        textAlign:"center"
    },
    genre:{
        color:"black",
        fontSize:15,
        textAlign:"center",
        fontWeight:"bold"
    }
})