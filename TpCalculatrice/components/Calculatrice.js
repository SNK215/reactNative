import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Bouton from './Bouton'

export default function Calculatrice() {

    let [operation, setOperation] = useState("")
    let [resultat, setResultat] = useState()

    function calcul(element){
        if (element === "C") {
            setOperation("")
            setResultat()
        } if (element === "=") {
            setResultat(eval(operation))
            setOperation("")
        } if (element != "C" && element != "=") {
            if (resultat != undefined) {
                setResultat()
            }
            setOperation(operation += element)
        }
    }

    return (
        <View style={styles.calculatrice}>

            {/* DISPLAY */}
            <View style={styles.display}>
                <Text style={styles.displayText}>{operation}{resultat}</Text>
            </View>

            <View style={styles.ligne}></View>

            {/* BOUTONS */}
            <View style={styles.panneauBouton}>
                <Bouton bouton="/" calcul={calcul} style={true}/>
                <Bouton bouton="*" calcul={calcul} style={true}/>
                <Bouton bouton="+" calcul={calcul} style={true}/>
                <Bouton bouton="-" calcul={calcul} style={true}/>
                <Bouton bouton="1" calcul={calcul} style={true}/>
                <Bouton bouton="2" calcul={calcul} style={true}/>
                <Bouton bouton="3" calcul={calcul} style={true}/>
                <Bouton bouton="4" calcul={calcul} style={true}/>
                <Bouton bouton="5" calcul={calcul} style={true}/>
                <Bouton bouton="6" calcul={calcul} style={true}/>
                <Bouton bouton="7" calcul={calcul} style={true}/>
                <Bouton bouton="8" calcul={calcul} style={true}/>
                <Bouton bouton="C" calcul={calcul} style={true}/>
                <Bouton bouton="9" calcul={calcul} style={true}/>
                <Bouton bouton="0" calcul={calcul} style={true}/>
                <Bouton bouton="=" calcul={calcul} style={false}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    calculatrice:{
    }, 
    display:{
        backgroundColor:"#ADD8E6",
        borderRadius:10,
        margin:10,
        height:"30%",
        padding:10,
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"flex-end",
    },
    displayText:{
        fontSize:60,
        color:"black",
    },
    panneauBouton:{
        marginBottom:"5%",
        borderRadius:10,
        height:"65%",
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center",
        paddingTop:"7%"
    },
    ligne:{
        borderBottomColor:"black",
        borderBottomWidth:2,
        margin:10
    }
})