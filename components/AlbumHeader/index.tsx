import React from 'react'
import { Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Album } from '../../types';
import styles from './styles';


export type AlbumHeaderProps = {
    album: Album;
}

const AlbumHeader = (props: AlbumHeaderProps) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: props.album.imageUri }} />
            <Text style={styles.name}>{props.album.name}</Text>
            <View style={styles.creatorContainer}>
                <Text style={styles.by}>{props.album.by}</Text>
                <Text style={styles.numberOfLikes}>{props.album.numberOfLikes} Like(s)</Text>
            </View>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.textButton}>PLAY</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default AlbumHeader;