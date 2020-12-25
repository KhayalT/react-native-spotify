import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Album } from '../../types';
import styles from './styles';
import AlbumComponent from '../Album'


export type AlbumCategoryProps = {
    title: string,
    albums: Album[],
}

const AlbumCategory = (props: AlbumCategoryProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <FlatList
                data={props.albums}
                renderItem={({ item }) => <AlbumComponent album={item} />}
                keyExtractor={(item) => item.id}
                horizontal={true}
            />
        </View>
    )
}

export default AlbumCategory;