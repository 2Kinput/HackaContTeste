import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1
    },

    box1: {
        backgroundColor: '#1E90FF',
        height: 300,
        borderWidth: 1,
        borderColor: '#A9B6C6',
        borderBottomLeftRadius: 40,
        borderBottomEndRadius: 40,
        marginBottom: 20,
        justifyContent: 'center'
    },

    titulo: {
        fontSize: 40,
        alignSelf: 'center',
        marginTop: 50,
        color: '#FFF'
    },

    box2: {
        backgroundColor: '#001A35',
        height: '100%',
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
        paddingLeft: 10,
    },

    inputArea: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: 20

    },

    iconView: {
        width: 40,
        height: 48,
        justifyContent: 'center',
        marginRight: 35
    },

    btnSignIn: {
        marginTop: 30,
        backgroundColor: '#1E90FF',
        width: 300,
        height: 40,
        borderRadius: 10,
        marginBottom: 12
    },

    labelLogin: {
        textAlign: 'center',
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
        padding: 8
    },

    labelSignUp: {
        textAlign: 'center',
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
        padding: 8
    },

    btnSignUp:{
        backgroundColor: '#1E90FF',
        width: 300,
        height: 40,
        borderRadius: 10,
        marginBottom: 10
    }
})

export default styles;