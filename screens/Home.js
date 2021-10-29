import React,{useLayoutEffect, useState} from "react";
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from "react-native";
import Colors from '../constants/Colors';
import {Ionicons} from "@expo/vector-icons";


const ListButtton = ({title, color, onPress, onDelete}) => {
    return(
    <TouchableOpacity 
     style={[styles.itemContainer, {backgroundColor:color}]}
     onPress={onPress}
     >
         <View><Text style={styles.itemTitle}>{title}</Text></View>
         <View style={{flexDirection:"row"}}>
            <TouchableOpacity onPress={()=>{}}>
               <Ionicons name="options-outline" size={24} color="white"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={onDelete}>
               <Ionicons name="trash-outline" size={24} color="white"/>
            </TouchableOpacity>
         </View>
     </TouchableOpacity> );
}

const renderAddListIcon= (addItem) =>{
    return(
        <TouchableOpacity onPress={() => addItem({title:"Title", color:Colors.orange})} >
             <Text style={styles.icon}>+</Text>
        </TouchableOpacity>
    )
}
 export default ({navigation}) =>{
     const [lists, setLists]= useState([
        {title: "School", color:Colors.red},
        {title:"Work", color:Colors.green},
        {title:"Fun", color:Colors.blue}

     ]);
    
     
     return(
     <View style ={styles.container}>
         <FlatList data={lists}
             renderItem={({item:{title,color}, index})=>{
                  return(
                    <ListButtton 
                    title={title} 
                    color={color} 
                    navigation={navigation} 
                    onPress ={() => {navigation.navigate("ToDoList", {title,color})}}
                      onDelete = {() => removeItemFromLists(index)}  
                    />
                  );
             }}
         />
          </View>
     );
 }
 const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    itemTitle: { fontSize: 24, padding: 5, color: "white" },
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 100,
        flex: 1,
        borderRadius: 20,
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 15,
    },
    icon: {
        padding: 5,
        fontSize: 24,
    },
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});