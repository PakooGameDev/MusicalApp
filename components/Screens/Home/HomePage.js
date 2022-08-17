import { SafeAreaView, View} from 'react-native';
import { MusicList,CurrentMusic, Header,Search,Title,Recommendations} from '../../modules/index.js';
import {styles} from '../../modules/styles.js'

  const FlatList_Header = () => {
    return (
        <View>
            <Search styles={{}}/>
            <Title title='Recommendations'/>
            <Recommendations Screen='Home' />
            <Title title='Playlist'/>
        </View>
    );
  }
    

export function Home({navigation}){
    return (
      <SafeAreaView style={styles.container}>
        <Header iconName='music' name='Home'/>
        <MusicList header={FlatList_Header} Screen='Home' />
        <CurrentMusic navigation={navigation}/>
      </SafeAreaView>
    );
  }
  
 
