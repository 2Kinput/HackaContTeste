import React, {useState} from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';


//importação icones
import AntDesign from '@expo/vector-icons/AntDesign';

//importação do estilo
import styles from './styles';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={styles.container}>

            <View style={styles.box1}>
                <TouchableOpacity style={styles.btnVoltar}>
                    <AntDesign name="arrowleft" size={24} color="#FFF" />
                    <Text style={{ marginTop: 2, marginLeft: 5, color: '#FFF' }}>Voltar</Text>
                </TouchableOpacity>


                <Text style={styles.titulo}>Sing In</Text>

            </View>

            <View style={styles.box2}>

                <View style={styles.boxTextInput}>
                    <Text style={styles.email}>Email</Text>
                    <TextInput style={styles.Input}
                        placeholder=' Email'
                        autoFocus
                        keyboardType='email-address'


                    />
                    <Text style={styles.password}>Password</Text>
                    <TextInput style={styles.Input}
                        placeholder=' Password'
                        keyboardType='password'

                    />

                </View>
            </View>
        </View>
    );
}