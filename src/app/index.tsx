import { View, Text, StyleSheet, FlatList, StatusBar, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";

import * as SplashScreen from 'expo-splash-screen';
import {AmaticSC_400Regular, AmaticSC_700Bold }  from '@expo-google-fonts/amatic-sc'
import {
    useFonts,
    Inter_900Black,
  } from '@expo-google-fonts/inter';

import DayListItem from "@/src/components/core/dayListItem";

const days = [...Array(24)].map((val, index) => index + 1)


SplashScreen.preventAutoHideAsync();
 
export default function HomeScreen() {

    const [fontLoaded]  =  useFonts({
        Inter: Inter_900Black,
        Amatic: AmaticSC_400Regular,
        AmaticBold : AmaticSC_700Bold
     }); 


     useEffect(() => {

      if (!fontLoaded) {
        SplashScreen.hideAsync();
      } 

     },[fontLoaded])

     
  if (!fontLoaded) {
    return null ;
  } 


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
