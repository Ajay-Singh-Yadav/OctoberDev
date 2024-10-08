import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'




export default function DayDetailsScreen() {
  return (
    <View>
       <Stack.Screen options={{title:"Day 3: Markdown"}} />
      <Text>Day Details Screen</Text>

      <Link href="/(days)/day3/editor" asChild>
           <Button title='Go to editor' />
      </Link>
    
    </View>
  )
} 