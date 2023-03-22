import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native'
import React from 'react'

export default function FirstDemo() {

    const tab = [{texte: "bla", id: 0}, {texte: "blabla", id: 1}, {texte: "blablabla", id: 2}]

    function messageConsole(){
        console.log("Click bouton");
    }

    return (
        <View style={styles.container}>
            <Text>Ceci est du texte venant du composant FirstDemo</Text>
            <TextInput></TextInput>
            <Button title="Mon Bouton" onPress={messageConsole}/>
            <FlatList data={tab} renderItem={(itemData) => {
                return (
                    <View>
                        <Text style={styles.monTexte}>{itemData.item.texte}</Text>
                    </View>
                )
            }} keyExtractor={(item, index) => {
                return index
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    monTexte : {
        color: "red",
        fontSize: 75
    }
})
