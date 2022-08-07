import React from 'react';
import { Text, View} from 'react-native';
import { Feather } from  '@expo/vector-icons'
import {styles} from '../styles.js'


export function Header(props) {
    return (
    <View elevation={7}   style={styles.header}>
        <Feather name='music' style={styles.headerItems} />
        <Text style={styles.headerItems}>{props.name}</Text>
    </View>
    );
  }

