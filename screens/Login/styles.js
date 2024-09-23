import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1
    },

    box1: {
        backgroundColor: '#1E90FF',
        height: 400,
        borderWidth: 1,
        borderBottomLeftRadius: 40,
        borderBottomEndRadius: 40,
        marginBottom: 20
    },

    btnVoltar: {
        flexDirection: 'row',
        marginHorizontal: 30,
        marginVertical: 60,
    },

    titulo: {
        fontSize: 40,
        alignSelf: 'center',
        marginTop: 50,
        color: '#FFF'
    },

    box2: {
        backgroundColor: '#001935',
        height: '53%',
        borderWidth: 1,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
        
    },

    boxTextInput: {
        alignSelf: 'center',
        marginVertical: 50,
        width: 320,
        height: 350
    },

    email: {
        color: '#fff',
        fontSize: 22,
        marginBottom: 10
    },
    password: {
        color: '#fff',
        fontSize: 22,
        marginBottom: 10,
        marginTop: 10
    },

    Input: {
        backgroundColor: '#1C2C45',
        height: 50,
        width: 300,
        borderRadius: 10,
        paddingLeft: 10
    }
})

export default styles;