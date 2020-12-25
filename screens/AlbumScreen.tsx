import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import AlbumHeader from '../components/AlbumHeader';
import SongListitem from '../components/SongListitem/';
import { FlatList } from 'react-native-gesture-handler';

const album = {
    id: '11',
    name: 'Good Vibes',
    by: 'Spotify',
    numberOfLikes: '3',
    imageUri: 'https://reactjs.org/logo-og.png',
    artistHeadline: 'Taylor,sdds,Avicii',
    songs: [
        {
            id: '1',
            imageUri: 'https://reactjs.org/logo-og.png',
            title: 'GameBRow',
            artist: 'Tame'

        },
        {
            id: '2',
            imageUri: 'https://reactjs.org/logo-og.png',
            title: 'bent',
            artist: 'Krow'

        },
        {
            id: '3',
            imageUri: 'https://reactjs.org/logo-og.png',
            title: 'Takes',
            artist: 'Helen'

        },
        {
            id: '4',
            imageUri: 'https://reactjs.org/logo-og.png',
            title: 'Frot',
            artist: 'Asili'

        },
        {
            id: '5',
            imageUri: 'https://reactjs.org/logo-og.png',
            title: 'GameBRow',
            artist: 'Fost'

        },
    ]
}


const AlbumScreen = () => {

    const route = useRoute();

    useEffect(() => {
        console.log(route);
    }, [])


    return (
        <View>
            <Text>Hello</Text>
            <FlatList
                data={album.songs}
                renderItem={({ item }) => <SongListitem song={item} />}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={() => <AlbumHeader album={album} />}
            />
        </View >


    );
}

export default AlbumScreen;