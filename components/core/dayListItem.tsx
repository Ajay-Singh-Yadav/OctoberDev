import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


 type DayListItem ={
    days :number;
 }

export default function DayListItem({days} : DayListItem) {
  return (
    <View style={styles.box} >
    <Text style={styles.text}>{days}</Text>
  </View>
  )
}


const styles = StyleSheet.create({
    box: {
      backgroundColor: "#F9EDE3",
     flex:1,
     aspectRatio:1,
      justifyContent: "center",
      alignItems: "center",
      borderColor: "#9b4522",
      borderWidth:StyleSheet.hairlineWidth,
      borderRadius: 20,
    },
    text: {
      color: "#9b4521",
      fontSize: 76,
      fontFamily: 'AmaticBold'
    },
  });
  