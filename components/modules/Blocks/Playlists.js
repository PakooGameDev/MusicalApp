import { FlatList } from 'react-native';
import { Playlist } from '../Items/Playlist';
import { data } from './MusicList';


export function Playlists(props) {
    const _renderItem = ({ item, index }) => (
        <Playlist
            Item={item}
            Screen={props.Screen}
            data={data}
            index={index}
            navigation={props.navigation}
        />
    );
    return (
        <FlatList keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={_renderItem} />
    );
}
