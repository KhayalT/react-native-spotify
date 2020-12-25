import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    creatorContainer: {
        flexDirection: 'row',
        margin: 10,
    },
    image: {
        width: 200,
        height: 200,
    },
    name: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    by: {
        color: 'lightgray',
        margin: 4,
        fontSize: 16,
    },
    numberOfLikes: {
        color: 'lightgray',
        margin: 4,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#1cd05d',
        height: 50,
        width: 150,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
});

export default styles;