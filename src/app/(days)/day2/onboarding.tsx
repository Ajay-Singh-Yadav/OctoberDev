import { View, Text, StyleSheet, SafeAreaView, Button, Pressable } from 'react-native'
import React, { useState, } from 'react'
import { Stack, router

 } from 'expo-router'
 import { Directions, Gesture, GestureDetector } from 'react-native-gesture-handler';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'; 
import { StatusBar } from 'expo-status-bar';

import Animated ,{ FadeIn, FadeOut } from 'react-native-reanimated';



const onboardingSteps = [
    {
       icon:'snowflake',
       title:'Welcome #OctoberDEV',
       description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'

    },
    {
        icon:'people-arrow',
        title:'Learn and grow together',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
 
     },
     {
        icon:'people-arrow',
        title:'Track every transaction',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
 
     },
]

export default function OnBoardingScreen() {

    const [screenIndex, setIndexScreen] = useState(0);

    const data  = onboardingSteps[screenIndex]

    const onContinue = () =>{
        const isLastScreen = screenIndex==onboardingSteps.length-1;
        if(isLastScreen){
            endOnBoarding();

        }else{
            setIndexScreen(screenIndex+1);
        }
      
    };

    const endOnBoarding = () =>{
        setIndexScreen(0);
        router.back();
    }

    const swipeForward = Gesture.Fling()
                  .direction(Directions.LEFT)
                  .onEnd((event) =>{
                    console.log(' End Fling', event);
                     onContinue();
    });



  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{headerShown:false}} />

      <StatusBar style='light' />

       <View style={styles.stepIndicatorContainer}>
              {
                onboardingSteps.map((step, index) => (
                    <View style={[styles.stepIndicator, {backgroundColor:index==screenIndex ?'#CEF202':'grey'}]}  />
                ))
              }

              
              
       </View>

       {/* <GestureDetector gesture={swipeForward}> */}

      <Animated.View  
      entering={FadeIn} 
      exiting={FadeOut}
      key={screenIndex}
       style={styles.pageContent}>
      <FontAwesome5  name={data.icon} size={100} style={ styles.image} color="#CEF202" />

      <View style={styles.footer}>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.description}>{data.description}
         </Text> 

         <View style={styles.buttonRow}>
            <Text onPress={endOnBoarding} style={styles.buttonText}>Skip</Text>

            <Pressable onPress={onContinue} style={styles.button} >
              <Text style={styles.buttonText}>Continue</Text>
            </Pressable>

         </View>
      </View>  
      </Animated.View>
      {/* </GestureDetector> */}

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    page:{
        //  alignItems:"center",
         flex:1,
         justifyContent:'center',
          backgroundColor:'#15141A',
          
         
    },
    pageContent:{
        padding:20,
        
        flex:1

    },
    button:{

        backgroundColor:"#302E38",
      
        borderRadius:20,
        alignItems:'center',
        flex:1



    },
    stepIndicatorContainer:{
          flexDirection:'row',
          gap:8,
          marginLeft:40,
          marginRight:40,
          marginTop:70
    },
    stepIndicator:{
        flex:1,
        height:3,
        backgroundColor:"gray",
        gap:8,
        borderRadius:10
    },
    buttonRow:{
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
        gap:30

    },
    buttonText:{
        color:"#FDFDFD",
        fontFamily:'Inter',
        fontSize:18,
        padding:15,
        paddingHorizontal:20

    },
    image:{
        alignSelf:"center",
        marginTop:50
    },
    title:{
        color:'#FDFDFD',
        fontSize:50,
        fontWeight:'600',
        fontFamily:'Inter',
        letterSpacing:6,
        marginVertical:20
       
    },
    description:{
        color:'gray',
        fontSize:18,
        // margin:20
        marginBottom:20,
        lineHeight:30

    },
    footer:{
        marginTop:'auto'
    }

})