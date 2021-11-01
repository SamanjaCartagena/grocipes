import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./screens/Home";
import EditList from './screens/EditList';
import ToDoList from './screens/ToDoList';
import Colors from './constants/Colors';
import * as firebase from "firebase";
import Login from "./screens/Login";


const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const AuthScreens = () =>{
  return(
    <AuthStack.Navigator>
        <AuthStack.Screen name="Login" component={Login}/>
    </AuthStack.Navigator>
  );
}




const Screens =() => {
 return(
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
 )
}

const FireTodoApp = () =>{
  return(<View style={styles.container}>
    <Text>Hello Fire App Devs!</Text>
  </View>);
}

export default function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  return (
    <NavigationContainer>
   
     {isAuthenticated ? <Screens /> : <AuthScreens />}
    </NavigationContainer>
  );

const firebaseConfig = {
  apiKey: "AIzaSyDHGV4cX7xCwDyAgA-w3m4FEZPPYmKCNiQ",
  authDomain: "grocipes-b1f52.firebaseapp.com",
  projectId: "grocipes-b1f52",
  storageBucket: "grocipes-b1f52.appspot.com",
  messagingSenderId: "957148993497",
  appId: "1:957148993497:web:b9ccbbb4e01774715febc8"
};

  firebase.initializeApp(firebaseConfig);
}

//firebase.initializeApp(firebaseConfig);
