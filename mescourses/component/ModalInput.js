import { Button, Image, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ModalInput(props) {

    const [texteArticle, setTexteArticle] = useState("")

    const addArticle = async ()=> {
        console.log("Ajout d'un article")
        props.addArticle(texteArticle);
    }

    function textArticle(enteredText) {
        // console.log(enteredText)
        setTexteArticle(enteredText)
    }


    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.container}>
                <Pressable onPress={props.closeModale} style={({pressed}) => pressed && styles.pressedItem}>
                    <Image source={require('./assets/caddie.png')} style={styles.image} resizeMode='contain' />
                </Pressable>
                <TextInput style={styles.textInput} placeholder="Taper votre Article !!!!" onChangeText={textArticle} value={texteArticle} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Ajouter Article' onPress={addArticle} />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.closeModale} color="red" />
                    </View>
                </View>

            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "70%",
        padding: 8,
        borderRadius: 12,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: "40%",
        marginHorizontal: 8,
    },
    image: {
        width: 100,
        height: 150,
    },
    pressedItem : {
        backgroundColor : "yellow",
    }
})