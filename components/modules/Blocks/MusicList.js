import { FlatList} from 'react-native';
import { Song } from '../Items/SongItem';

export const data = [
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

export function MusicList(props){
    const _renderItem = ({ item}) => (
    <Song 
        Item={item}    
        Screen={props.Screen} 
    />        
    );
    return ( 
    <FlatList    
        data={data}
        renderItem={_renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={props.header}
    />          
    );
  }
 

