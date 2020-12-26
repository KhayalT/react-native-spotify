import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flexDirection: 'row',
        bottom: 48,
        backgroundColor: '#131313',
        width: '100%',
        alignItems: 'center',
        borderWidth: 3,

    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        width: 100,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 75,
        height: 75,
        marginRight: 10,
    },
    title: {
        color: 'white',
        fontSize: 16,
        margin: 10,
    },
    artist: {
        color: 'lightgray',
        fontSize: 16,
    }
});

export default styles;