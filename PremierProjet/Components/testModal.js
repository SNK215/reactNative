import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function testModal() {
  return (
    <Modal visible={props.visible}>
        <View>
            <Text>Texte blablablablaaaaaaaaaa</Text>
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({})