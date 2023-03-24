import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView } from 'react-native'
import React from 'react'
import { useState } from 'react'
import ComposerOverview from '../Components/ComposerOverview'

export default function SearchComposer() {

    const [searchText, setSearchText] = useState("")
    const [composerData, setComposerData] = useState(null)

    function search(text){
        fetch("https://api.openopus.org/composer/list/search/"+text+".json")
        .then(response => response.json())
        .then(data => setComposerData(data.composers))
        .catch(error => console.error(error))
    }

    function saveText(enteredText) {
        setSearchText(enteredText)
    }

    return (
        <ScrollView>
            <View style={styles.view}>
                <Image style={styles.image} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Search_Noun_project_15028.svg/1046px-Search_Noun_project_15028.svg.png"}/>
                <TextInput style={styles.textInput} placeholder="4 letters minimum" onChangeText={saveText} value={searchText} />
                <Button title="Confirm" onPress={()=>search(searchText)}/>

                <View style={styles.mapView}>    
                    {composerData == null ? <Text style={styles.loadingText}>Waiting for valid request...</Text> :       
                    composerData.map((element,key) => <ComposerOverview key={key} name={element.complete_name} birth={element.birth} death={element.death} portrait={element.portrait} epoch={element.epoch} id={element.id}/>)}
                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    view:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    textInput:{
        borderColor:"#ADD8E6",
        width:"70%",
        borderWidth:2,
        borderRadius:5,
        marginBottom:10
    },
    image:{
        height:200,
        width:200,
        margin:20
    },
    loadingText:{
        fontSize:20,
        marginTop:"20%"
    },
    mapView:{
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center"
    }
})