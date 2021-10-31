import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./screens/Home";
import EditList from './screens/EditList';
import ToDoList from './screens/ToDoList';
import Colors from './constants/Colors';
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
     <Stack.Screen 
        name="Edit" 
        component={EditList}
        options={({route})=>{
       return ({
         title: route.params.title ? `Edit ${route.params.title} list` : "Create new list",
         headerStyle:{
           backgroundColor:route.params.color || Colors.blue
         },
         headerTintColor:"white"
       })
     }}

     />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

