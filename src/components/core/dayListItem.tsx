import { View, Text, StyleSheet, Pressable, } from 'react-native'
import React from 'react'

import { Link } from 'expo-router'

 type DayListItem ={
    days :number;
 }

export default function DayListItem({days} : DayListItem) {
  return (
    <Link href={`/(days)/day${days}`} asChild>
  
    <Pressable  style={styles.box} >
    <Text style={styles.text}>{days}</Text>
   
    </Pressable>
  </Link>
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
  