import { View, Text } from 'react-native'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen';
import {AmaticSC_400Regular, AmaticSC_700Bold }  from '@expo-google-fonts/amatic-sc'
import React, { useEffect } from "react";
import {
    useFonts,
    Inter_900Black,
  } from '@expo-google-fonts/inter';

  import { GestureHandlerRootView } from 'react-native-gesture-handler';
  
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {


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
          <GestureHandlerRootView style={{flex:1}}>
          <Stack screenOptions={{}}>
        
           <Stack.Screen  name='index' options={{title:'OctoberDEV'}} />  

         </Stack>
         </GestureHandlerRootView>
        )
}