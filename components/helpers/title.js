

import React from 'react';
import { Text,TouchableWithoutFeedback,View} from 'react-native';
import { Feather } from  '@expo/vector-icons'
import {styles} from '../styles.js'


export function Title(props) {
    return (
        <View style={styles.title}>
            <Text style={styles.titleItems}>{props.title}</Text>
            <TouchableWithoutFeedback>
                <Feather name='chevron-right' style={styles.titleItems}/>
            </TouchableWithoutFeedback>  
        </View>
    );
  }

