import React from 'react';
import { View, Text, Image } from 'react-native';
import { Song } from '../../types';
import styles from './styles';
import { AntDesign, FontAwesome } from '@expo/vector-icons';


const song = {
    id: '1',
    imageUri: 'https://reactjs.org/logo-og.png',
    title: 'GameBRow',
    artist: 'Tame'
}

const PlayerWidget = () => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: song.imageUri }} style={styles.image} />
            <View style={styles.rightContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.title} >{song.title}</Text>
                    <Text style={styles.artist}>{song.artist}</Text>
                </View>

                <View style={styles.iconContainer}>
                    <AntDesign name="hearto" size={30} color='white' />
                    <FontAwesome name="play" size={30} color='white' />
                </View>
            </View>
        </View>


    );
}

export default PlayerWidget;