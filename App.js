import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./screens/Home";
import ToDoList from './screens/ToDoList';
const Stack = createStackNavigator();

const FireTodoApp = () =>{
  return(<View style={styles.container}>
    <Text>Hello Fire App Devs!</Text>
  </View>);
}

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Fire ToDo" component={Home}/>
    <Stack.Screen name="ToDoList" 
    component={ToDoList}
     options={({route})=>{
       return ({
         title:route.params.title,
         headerStyle:{
           backgroundColor:route.params.color
         },
         headerTintColor:"white"
       })
     }}
    />

    </Stack.Navigator>
    </NavigationContainer>
  );
}

