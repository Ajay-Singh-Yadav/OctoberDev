import { View, Text, StyleSheet, FlatList, StatusBar } from "react-native";
import React from "react";

import DayListItem from "@/components/core/dayListItem";
const days = [...Array(24)].map((val, index) => index + 1)

 


export default function index() {
  return (
     
    <View style={styles.container}>

      
       
 
         
     
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
