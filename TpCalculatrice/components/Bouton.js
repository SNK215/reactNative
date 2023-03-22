import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

export default function Bouton(props) {

    function handlePress(pressedButton){
        props.calcul(pressedButton)
    }

    return (
        <Pressable onPress={()=>handlePress(props.bouton)} style={({pressed}) => pressed ? 
            props.style ? styles.boutonPressed : styles.boutonPressedEgal : 
            props.style ? styles.boutonStyle : styles.boutonStyleEgal}>
            <View>
                <Text style={styles.boutonTexte}>{props.bouton}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    boutonTexte:{
        fontSize:60
    },
    boutonStyle:{
        backgroundColor:"#D3D3D3",
        color:"black",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:100,
        width:90,
        height:90,
        marginVertical:15,
        marginHorizontal:5
    },
    boutonPressed:{
        backgroundColor:"grey",
        color:"black",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:100,
        width:90,
        height:90,
        marginVertical:15,
        marginHorizontal:5
    },
    boutonStyleEgal:{
        backgroundColor:"#90EE90",
        color:"black",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:100,
        width:90,
        height:90,
        marginVertical:15,
        marginHorizontal:5
    },
    boutonPressedEgal:{
        backgroundColor:"#00FF00",
        color:"black",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:100,
        width:90,
        height:90,
        marginVertical:15,
        marginHorizontal:5
    }
})