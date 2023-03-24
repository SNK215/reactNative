import { StyleSheet, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function ComposerOverview({name, birth, death, portrait, epoch, id}) {

    const navigation = useNavigation()

    return (
            <TouchableOpacity style={styles.view} onPress={() => navigation.navigate("WorksList", {id : id})}>
                <Image style={styles.image} src={portrait} resizeMode="contain"/>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.epoch}>{epoch}</Text>
                <Text style={styles.subtitle}>{birth.replace("-01-01", "")} - {death == null ? "" : death.replace("-01-01", "")}</Text>    
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    view:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        alignItems:"center",
        borderColor:"grey",
        borderWidth:2,
        borderRadius:10,
        width:150,
        margin:5,
        paddingBottom:5
    },
    title:{
        textAlign:"center",
        color:"black",
        fontSize:17
    },
    subtitle:{
        textAlign:"center",
        color:"black"
    },
    epoch:{
        textAlign:"center",
        color:"black",
        fontSize:15
    },
    image:{
        width:"100%",
        height:150,
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
    }
})