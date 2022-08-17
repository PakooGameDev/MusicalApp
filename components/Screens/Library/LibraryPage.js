import { SafeAreaView, View} from 'react-native';
import { Header, Search, MusicList} from '../../modules/index.js';
import {styles} from '../../modules/styles.js'

    const FlatList_Header = () => {
        return (
            <View>
                <View style={{marginBottom: 20}}><Search/></View>
            </View>
        );
    }
  
export function Library({navigation}){
    return (
      <SafeAreaView style={styles.container}>
        <Header iconName='bookmark' name='Library'/>
        <MusicList header={FlatList_Header} Screen='Library' navigation={navigation}/>
      </SafeAreaView>
    );
  }
  
 
