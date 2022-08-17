import {  View,TouchableOpacity,  Image,Text} from 'react-native';
import {styles} from '../styles.js'
import { SongMenu } from '../Buttons/SongMenu.js';

export function Song (props) {
return(
    <View style={styles.songItem}>
        <TouchableOpacity style={styles.songMeta} >
            <Image style={styles.songLogo} source={props.Item.thumbnail}/>
            <View style={{marginLeft:10,width:250}}>
                <Text numberOfLines={1} style={styles.songTitle}>{props.Item.title}</Text>
                <View style={{flexDirection:'row'}}>
                    <Text numberOfLines={1} style={styles.songLong}>{props.Item.long}</Text>
                    <Text numberOfLines={1} style={styles.songAuthor}>{props.Item.author}</Text>
                </View>  
            </View>
        </TouchableOpacity>
        <SongMenu Screen={props.Screen}/>
    </View>
)};


