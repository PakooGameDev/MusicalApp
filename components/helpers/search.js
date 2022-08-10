import React from 'react';
import { View, TextInput, TouchableWithoutFeedback} from 'react-native';
import { Feather } from  '@expo/vector-icons'
import {styles} from '../styles.js'


export function Search(props) {
    const [text, setText] = React.useState();
    return (
        <View elevation={7}  style={styles.searchSection}>
        <View style={{justifyContent:'flex-start', flexDirection: 'row',  alignItems:'center',}}>
            <Feather name='search' color='#a1a3a4' style={{fontSize: 24,marginRight: 12, marginLeft:12,}}/>
            <TextInput value={text} 
                onChangeText={setText} 
                maxLength={30} 
                placeholder='Search' 
                placeholderTextColor='#a1a3a4' >
            </TextInput>
        </View>
        <TouchableWithoutFeedback>
            <Feather name='filter' color='#a1a3a4' style={{ fontSize: 24,marginRight: 12, marginLeft:12,}}/>
        </TouchableWithoutFeedback>
    </View>
    );
  }

