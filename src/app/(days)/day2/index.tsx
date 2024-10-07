import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'




export default function DayDetailsScreen() {
  return (
    <View>
       <Stack.Screen options={{title:"Day 2: OnBoarding"}} />
      <Text>Day Details Screen</Text>

      <Link href="/(days)/day2/onboarding" asChild>
           <Button title='Go to OnBoarding' />
      </Link>
    
    </View>
  )
} 