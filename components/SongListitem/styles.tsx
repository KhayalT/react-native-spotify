import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
    },
    rightContainer: {
        flex: 1,
        marginLeft: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        justifyContent: 'center'
    },
    image: {
        width: 75,
        height: 75,
    },
    title: {
        color: 'white',
        fontSize: 20,
    },
    artist: {
        color: 'lightgray',
        fontSize: 18,
        marginLeft: 10,
    }
});

export default styles;