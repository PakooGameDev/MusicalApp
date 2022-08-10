import React, { useRef }  from 'react';
import { SafeAreaView, View, ScrollView, Image,Text,FlatList} from 'react-native';

import { Header } from '../helpers/header';
import { Search } from '../helpers/search';
import { Title } from '../helpers/title';
import { Recommendations } from '../helpers/Recommendations';
import {styles} from '../styles.js'

  const FlatList_Header = () => {
    return (
        <View>
            <Search styles={{}}/>
            <Title title='Recommendations'/>
            <Recommendations data={data}/>
            <Title title='Playlist'/>
        </View>
    );
  }
    
  const data = [
        {
            id: '001',
            name: "Save Your Tears ",
            author: 'FFDP',
            thumbnail: require('./songLogo.jpg'),
            long: '4:54'
        },
        {
            id: '002',
            name: "Save Your Tears",
            author: 'Sabaton',
            thumbnail: require('./songLogo.jpg'),
            long: '4:54'
        },
        {
            id: '003',
            name: "Save Your Tears",
            author: 'LinkinPark',
            thumbnail: require('./songLogo.jpg'),
            long: '4:54'
        },
        {
            id: '004',
            name: "Save Your Tears",
            author: 'LInkinPark',
            thumbnail: require('./songLogo.jpg'),
            long: '4:54'
        },
        {
            id: '005',
            name: "Save Your Tears ",
            author: 'FFDP',
            thumbnail: require('./songLogo.jpg'),
            long: '4:54'
        },
        {
            id: '006',
            name: "Save Your Tears",
            author: 'Sabaton',
            thumbnail: require('./songLogo.jpg'),
            long: '4:54'
        },
        {
            id: '007',
            name: "Save Your Tears",
            author: 'LinkinPark',
            thumbnail: require('./songLogo.jpg'),
            long: '4:54'
        },
        {
            id: '008',
            name: "Save Your Tears",
            author: 'LInkinPark',
            thumbnail: require('./songLogo.jpg'),
            long: '4:54'
        },
        {
            id: '009',
            name: "Save Your Tears ",
            author: 'FFDP',
            thumbnail: require('./songLogo.jpg'),
            long: '4:54'
        },
        {
            id: '010',
            name: "Save Your Tears",
            author: 'Sabaton',
            thumbnail: require('./songLogo.jpg'),
            long: '4:54'
        },
        {
            id: '011',
            name: "Save Your Tears",
            author: 'LinkinPark',
            thumbnail: require('./songLogo.jpg'),
            long: '4:54'
        },
        {
            id: '012',
            name: "Save Your Tears",
            author: 'LInkinPark',
            thumbnail: require('./songLogo.jpg'),
            long: '4:54'
        },
    ]

  const Item = ({ name, img }) => (
    <View  style={{ 
        height: 70,
        width: '90%',
        alignSelf: 'center',
        borderRadius:10,
        marginTop: 20,
        elevation: 20,
        backgroundColor: '#2a2e32',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems:'center',
        paddingLeft: 10,
    }} >
        <Image style={{ width: 55, height: 55, borderRadius: 100 }} source={img}/>
        <Text style={{
            marginLeft: 10,
            fontWeight: '400',
            fontSize: 16,
            color:'#a1a3a4'
        }}>{name}</Text>
    </View>
    );

  
export function Home(){
    const renderItem = ({ item }) => (
        <Item name={item.name} img={item.thumbnail}/>
    );
    return (
        
      <SafeAreaView style={styles.container}>
        <Header name='Home'/>
            <FlatList
                style={{marginBottom: 20}}
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListHeaderComponent={FlatList_Header}
            />
      </SafeAreaView>
    );
  }
  
 
