import { FlatList} from 'react-native';
import { Song } from '../Items/SongItem';

const data = [
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
    {
        id: '005',
        title: "Save Your Tears ",
        author: 'FFDP',
        thumbnail: require('../../../assets/songLogo.jpg'),
        long: '4:54'
    },
    {
        id: '006',
        title: "Save Your Tears",
        author: 'Sabaton',
        thumbnail: require('../../../assets/songLogo.jpg'),
        long: '4:54'
    },
    {
        id: '007',
        title: "Save Your Tears",
        author: 'LinkinPark',
        thumbnail: require('../../../assets/songLogo.jpg'),
        long: '4:54'
    },
    {
        id: '008',
        title: "Save Your Tears",
        author: 'LInkinPark',
        thumbnail: require('../../../assets/songLogo.jpg'),
        long: '4:54'
    },
    {
        id: '009',
        title: "Save Your Tears ",
        author: 'FFDP',
        thumbnail: require('../../../assets/songLogo.jpg'),
        long: '4:54'
    },
    {
        id: '010',
        title: "Save Your Tears",
        author: 'Sabaton',
        thumbnail: require('../../../assets/songLogo.jpg'),
        long: '4:54'
    },
    {
        id: '011',
        title: "Save Your Tears",
        author: 'LinkinPark',
        thumbnail: require('../../../assets/songLogo.jpg'),
        long: '4:54'
    },
    {
        id: '012',
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
        Block='Playlist'  
        ShowMenu={true}  
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
 
export function Recommendations(props) {
    const _renderItem = ({item,index})=>(    
        <Song
        Item={item}  
        Screen={props.Screen} 
        Block='Rec'    
        data={data} 
        index={index}
        ShowMenu={false}
    /> 
    )          
    return (  
        <FlatList keyExtractor={(item)=>item.id} 
        horizontal
        showsHorizontalScrollIndicator={false} 
        data={data}
        renderItem={_renderItem} /> 
    );
  }
