import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import WorkOverview from '../Components/WorkOverview'

export default function WorksList({route}) {

    const id = route.params.id

    const [worksData, setWorksData] = useState(null)

    function getWorks(){
        fetch("https://api.openopus.org/work/list/composer/"+id+"/genre/all.json")
        .then(response => response.json())
        .then(data => setWorksData(data.works))
        .catch(error => console.error(error))
        }

        useEffect(() => {
            getWorks()
        },[])

    return (
        <View>
            {worksData == null ? <Text style={styles.loadingText}>Loading...</Text> :       
            <FlatList data={worksData} renderItem={(itemData) => {
                return (<WorkOverview title={itemData.item.title} subtitle={itemData.item.subtitle} genre={itemData.item.genre} id={itemData.item.id}/>)
                }}
                keyExtractor={(item, index) => {return index}}/>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    loadingText:{
        fontSize:25,
        textAlign:"center",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        margin:20
    }
})