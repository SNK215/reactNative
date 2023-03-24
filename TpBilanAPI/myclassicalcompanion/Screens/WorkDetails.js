import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

export default function WorkDetails({route}) {

    const title = route.params.title
    const subtitle = route.params.subtitle
    const genre = route.params.genre
    const workId = route.params.id
    var imageUrl = ""
    const [value, setValue] = useState("");
    const [searchText, setSearchText] = useState("")
    const [inputVisible, setInputVisible] = useState(false)

    function saveText(enteredText) {
        setSearchText(enteredText)
    }

    const addData = async () => {
        try{
            await AsyncStorage.setItem(workId, searchText)
        }catch (error) {
            console.log(error)
        }
    }

    const getData = async () => {
        try {
            const value =  await AsyncStorage.getItem(workId)
            if(value !== null) {
            setValue(value)
        }
        }catch (error) {
            console.log(error)
        }
    }

    const removeData = async () => {
        try {
            await AsyncStorage.removeItem(workId)
            setValue('')
        }catch (error) {
            console.log(error)
        }
    }

    function handlePress(){
        addData()
        setInputVisible(false)
    }

    useEffect(() => {
        getData()
        setSearchText(value)
    },[inputVisible])


    switch (true) {
        case genre == "Chamber" :
                imageUrl = "https://ds.static.rtbf.be/article/image/1248x1248/d/8/0/4e79bb70504cee1933a267728cdc41e7-1634223061.jpg"
            break;
    
            case genre == "Keyboard" :
                imageUrl = "https://ae01.alicdn.com/kf/HTB1QMlgJFXXXXaVXXXXq6xXFXXXH/Figure-de-cour-classique-earl-de-piano-Livraison-gratuite-peinture-paysage-l-huile-sur-toile-imprim.jpg_Q90.jpg_.webp"
            break;
            
            case genre == "Orchestral" :
                imageUrl = "https://dgpuo8cwvztoe.cloudfront.net/uploads/Archives/Images/_h_lg/Henschel_and_BSO_1881-1882_Season.jpg"
            break;

            case genre == "Stage" :
                imageUrl = "https://pll.harvard.edu/sites/default/files/styles/header/public/course/19thcenturyopera_1.jpg?itok=tBdJqVSt"
            break;

            case genre == "Vocal" :
                imageUrl = "https://artsdot.com/ADC/Art.nsf/O/A2A8DS/$File/Jose_Gallegos_Y_Arnosa-Choir_practice.JPG"
            break;
    }

    return (
        <ScrollView>
            <View style={styles.view}>
                <Image style={styles.image} src={imageUrl}/>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
                <View style={styles.line}></View>
                <Text style={styles.comment}>{value}</Text>
                <View style={styles.line}></View>

                {inputVisible && 
                    <View>
                        <TextInput style={styles.input} multiline = {true} numberOfLines = {4} placeholder="Changes will take place once you leave this page" onChangeText={saveText} value={searchText}></TextInput>
                        <Button title="Confirm" onPress={()=>handlePress()}></Button>
                    </View>
                }
                <View style={styles.buttonView}>
                    <Button title="Add/Change Comment" onPress={()=>setInputVisible(true)}/>
                    <Button title="Delete Comment" onPress={()=>removeData()}/>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    view:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"center",
    },
    image:{
        height:300,
        width:"100%",
        marginBottom:20
    },
    title:{
        color:"black",
        fontSize:25,
        textAlign:"center", 
        marginBottom:5,
    },
    subtitle:{
        textAlign:"center",
        color:"black",
        fontSize:20,
        marginBottom:10
    },
    line:{
        borderBottomWidth:2,
        borderColor:"black",
        width:"25%",
        marginBottom:20
    },
    comment:{
        color:"black",
        fontSize:20,
        marginBottom:20,
        textAlign:"center"
    },
    input:{
        borderColor:"#ADD8E6",
        borderWidth:1,
        padding:20,
        borderRadius:10,
        color:"black",
        textAlign:"center",
        marginBottom:5

    },
    buttonView:{
        width:"100%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        marginTop:10
    }
})