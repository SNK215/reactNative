import { StyleSheet, Text, View, Button, TextInput, Modal, Image, Pressable } from 'react-native'
import React from 'react'
import { useState } from 'react';

export default function ModalForm(props) {

    const [textArticle, setTextArticle] = useState()

    function handleText(text){
        setTextArticle(text)
    }

    function handleSubmit(){
        props.setCourses([...props.courses, textArticle])
        props.closeModal
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View>
                <View>
                    <Pressable onPress={props.closeModal} style={({pressed}) => pressed && styles.pressed}>
                        <Image style={styles.monImage} source={require("./courses.jpg")} resizeMode="contain"/>
                    </Pressable>    
                <TextInput style={styles.monInput} placeholder="Entrez votre article ici" onChangeText={handleText} value={textArticle}></TextInput>
                <View style={styles.viewButtons}>
                    <Button style={styles.button} title='Valider' onPress={handleSubmit}/>
                    <Button title='Fermer' onPress={props.closeModal}/>
                </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    monTexte:{
        margin: 8, 
        padding: 8, 
        fontSize: 25
    },
    monInput:{
        backgroundColor: "white",
        color: "black",
        fontSize: 20,
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 5,
        margin: 5
    },
    monImage:{
        width: "60%",
        height:"50%",
    },
    pressed:{
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 20,
        backgroundColor: "red",
        justifyContent:"center"
    },
    viewImage:{
        padding:10,
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
    },
    viewButtons:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        margin:10
    }
})