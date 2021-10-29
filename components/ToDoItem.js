import React, {useState, useLayoutEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Checkbox from './Checkbox';
import Colors from '../constants/Colors';

export default ({text, isChecked, onChecked, onChangeText}) => {
    const [isEditMode, setEditMode] = useState(false);
    return(
        <View style={styles.container}>
        <View style={{flexDirection:"row", flex:1}}>
         <Checkbox isChecked={isChecked} onChecked={onChecked} />
         <TouchableOpacity onPress={() => {setEditMode(true)}}>
              {isEditMode ?

              <TextInput
                 underlineColorAndroid={"transparent"}
                 selectionColor={"transparent"}
                 autoFocus={true}
                  value={text}
                  onChangeText={() =>{}}
                  placeholder={"Add new item here"}
                  onSubmitEditing={() => {}}
                  maxLength={30}
                  style={styles.input, {outline:"none"}}
              />:
              <Text>{text}</Text>
              }
                 
                 </TouchableOpacity>

         {/**Text */}
         </View>
         {/*Remove */}

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between', 
        alignItems:'center', 
        padding:10,
    },
    icon:{
        padding:5,
        fontSize:16
    }, 
    text:{
        padding:3,
        fontSize:16,
    },
});