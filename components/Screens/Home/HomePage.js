import React,{useState} from 'react';
import { SafeAreaView, View} from 'react-native';
import { MusicList,CurrentMusic, Header,Search,Title,Playlists} from '../../modules/index.js';
import {styles} from '../../modules/styles.js'

const list = [
  {
      id: '001',
      title: "Save Save Your Tears Save Your Tears Save Your  Tears ",
      author: 'FFDP',
      thumbnail: require('../../../assets/songLogo.jpg'),
      long: '4:54'
  },
  {
      id: '002',
      title: "Save Save Your Tears Save Your Tears Save Your  Tears",
      author: 'Sabaton',
      thumbnail: require('../../../assets/songLogo.jpg'),
      long: '4:54'
  },
  {
      id: '003',
      title: "Save Save Your Tears Save Your Tears Save Your  Tears",
      author: 'LinkinParkLinkinParkLinkinParkLinkinPark',
      thumbnail: require('../../../assets/songLogo.jpg'),
      long: '4:54'
  },
  {
      id: '004',
      title: "Save Your Tears",
      author: 'LInkinPark',
      thumbnail: require('../../../assets/songLogo.jpg'),
      long: '4:54'
  },
]

  const FlatList_Header = (navigation) => {
    return (
        <View>
            <Search/>
            <Title title='Playlists'/>
            <Playlists navigation={navigation} Screen='Home' />
            <Title title='Recommendations'/>
        </View>
    );
  }
    

export function Home({navigation}){


 
    return (
      <SafeAreaView style={styles.container}>
        <Header  name='Home'/>
        <MusicList data={list} header={FlatList_Header(navigation)} />
        <CurrentMusic navigation={navigation}/>
      </SafeAreaView>
    );
  }
  
 
