import React from 'react';
import {Text, Image,  View,  FlatList} from 'react-native';
import {styles} from '../styles.js'


export function Recommendations(props) {
    const _renderItem = ({item,index})=>{
        return (        
            <View elevation={7}   style={{
                marginTop:16,
                marginLeft: index === 0 ? 25:0,
                marginRight: index === props.data.length ? 0:25,
                backgroundColor: '#2a2e32',
                borderRadius:20,
            }}>
                <Image style={styles.stretch} key={index} source={item.thumbnail}/>
                <Text style={{fontSize:14, fontWeight:'600',color: '#a1a3a4', paddingLeft:10,}}>{item.name}</Text>
               <Text style={{fontSize:12, fontWeight:'400',color: '#febb2c', marginTop:2, paddingLeft:10,paddingBottom:10,}}>{item.author}</Text>
            </View>
        )
    }
    return (
        <View style={styles.Recommendations}>
            <View>
                <FlatList keyExtractor={(item)=>'recommendations_'+item.id} 
                 horizontal
                 showsHorizontalScrollIndicator={false} 
                 contentContainerStyle={{}} 
                 data={props.data}
                 renderItem={_renderItem} />
            </View>
        </View>
    );
  }

