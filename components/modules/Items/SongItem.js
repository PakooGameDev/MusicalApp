import React from 'react';
import {  View,TouchableOpacity,  Image,Text} from 'react-native';
import {styles} from '../styles.js'
import { SongMenu } from '../Buttons/SongMenu.js';

export function Song (props) {
return(
    <View style={props.Block === 'Rec'? {marginLeft: props.index === 0 ? 31 : 0, marginRight: props.index === props.data.length ? 0 : 31}: styles.songItem}>
        <TouchableOpacity style={props.Block === 'Rec'? {} : styles.songMeta} >
            <Image style={props.Block === 'Rec'? styles.songLogoRec : styles.songLogo} source={props.Item.thumbnail}/>
            <View style={props.Block === 'Rec'? {width:150} : {marginLeft:10,width:250}}>
                <Text numberOfLines={1} style={styles.songTitle}>{props.Item.title}</Text>
                <View style={{flexDirection:'row'}}>
                    <Text numberOfLines={1} style={styles.songLong}>{props.Item.long}</Text>
                    <Text numberOfLines={1} style={styles.songAuthor}>{props.Item.author}</Text>
                </View>  
            </View>
        </TouchableOpacity>
        <SongMenu ShowMenu={props.ShowMenu} Screen={props.Screen}/>
    </View>
)};


