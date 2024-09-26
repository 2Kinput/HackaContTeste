import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';


//importação icones
import { AntDesign, Ionicons } from '@expo/vector-icons';


//importação do estilo
import styles from './styles';

export default function Login() {
    const [showPassword, setShowPassword] = useState('');
    const [hidePass, setHidePass] = useState(true);

    const ShowPass = () =>{
        setHidePass(!hidePass)
    }

    return (
        <View style={styles.container}>

            <View style={styles.box1}>
                <Text style={styles.titulo}>Sing In</Text>

            </View>

            <View style={styles.box2}>

                <View style={styles.boxTextInput}>
                    <Text style={styles.email}>Email</Text>
                    <TextInput style={styles.Input}
                        placeholder=' Email'
                        autoFocus
                        keyboardType='email-address'
                        placeholderTextColor='#A9B6C6'
                        


                    />
                    <Text style={styles.password}>Password</Text>

                    <View style={styles.inputArea}>

                        <TextInput style={styles.Input}
                            placeholder=' Password'
                            placeholderTextColor='#A9B6C6'
                            value={showPassword}
                            onChangeText={ (text) => setShowPassword(text) }
                            secureTextEntry={hidePass}

                        />
                        <TouchableOpacity style={ styles.iconView } onPress={ShowPass}>
                            <Ionicons name="eye" color="#FFF" size={25} />
                        </TouchableOpacity>


                    </View>


                    <TouchableOpacity style={styles.btnSignIn}>
                        <Text style={styles.labelLogin}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnSignUp}>
                        <Text style={styles.labelSignUp}>Sign Up ?</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
}