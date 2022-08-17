import { SafeAreaView, View} from 'react-native';
import { MusicList,CurrentMusic, Header,Search,Title,Playlists} from '../../modules/index.js';
import {styles} from '../../modules/styles.js'

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
        <MusicList header={FlatList_Header(navigation)} Screen='Home' />
        <CurrentMusic navigation={navigation}/>
      </SafeAreaView>
    );
  }
  
 
