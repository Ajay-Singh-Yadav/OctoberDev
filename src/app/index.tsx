import { View, Text, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";

import {StatusBar} from 'expo-status-bar'

import DayListItem from "@/src/components/core/dayListItem";

const days = [...Array(24)].map((val, index) => index + 1)

 
export default function HomeScreen() {

  return (
     
    <View style={styles.container}>
      <StatusBar style='dark' />

     <FlatList 
       contentContainerStyle={styles.content}
       columnWrapperStyle={styles.column}
       numColumns={2}
       data={days}
       renderItem={({item}) => <DayListItem days={item} />}
     />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
   
    gap: 10,
  },

  column:{

    gap:10

  },

  content:{
   // backgroundColor:'red',
    gap:10,
    padding:10,
    

  },

  
});
