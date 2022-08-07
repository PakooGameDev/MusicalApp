import React from 'react';
import { SafeAreaView} from 'react-native';
import { Feather } from  '@expo/vector-icons'
import { Header } from '../helpers/header';
import { Search } from '../helpers/search';
import { Title } from '../helpers/title';
import { Recommendations } from '../helpers/Recommendations';
import {styles} from '../styles.js'



export function Home() {
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
    ]

    return (
      <SafeAreaView style={styles.container}>
        <Header name='home'/>
        <Search/>
        <Title title='Recommendations'/>
        <Recommendations data={data}/>
        <Title title='Playlist'/>
      </SafeAreaView>
    );
  }
  
 

 