import React from 'react';
import { View, Text, Image } from 'react-native';
import { Song } from '../../types';
import styles from './styles';
import { Entypo } from '@expo/vector-icons';



export type SongListitemProps = {
    song: Song
}

const SongListitem = (props: SongListitemProps) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: props.song.imageUri }} style={styles.image} />
            <View style={styles.rightContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.title} >{props.song.title}</Text>
                    <Text style={styles.artist}>{props.song.artist}</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Entypo name="dots-three-vertical" size={25} color="white" />
                </View>
            </View>
        </View>


    );
}

export default SongListitem;