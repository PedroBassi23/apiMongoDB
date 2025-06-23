import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Keyboard, StyleSheet } from 'react-native';
import { Container, Input, Button, ButtonText } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FastImage from 'react-native-fast-image'; // Importação do FastImage

const Login = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        console.log(`LOGIN - Usuário: ${user} - Senha: ${password}`);
        navigation.navigate('main');
        Keyboard.dismiss();
    };

    const handleSignUp = () => {
        navigation.navigate('signUp');
        Keyboard.dismiss();
    };

    return (
        <Container>
    
            <FastImage
                source={require('../assets/logo.gif')}
                style={styles.gif}
                resizeMode={FastImage.resizeMode.contain} 
            />

            <Input
                placeholder="USUÁRIO"
                keyboardType="email-address"
                placeholderTextColor="#444"
                color="#000"
                value={user}
                onChangeText={setUser}
            />
            <Icon name="person" size={30} color="#999" style={{ position: 'absolute', left: 60, top: 285 }} />
            <Input
                placeholder="SENHA"
                keyboardType="numeric"
                placeholderTextColor="#444"
                color="#000"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            <Icon name="lock" size={25} color="#999" style={{ position: 'absolute', left: 60, top: 355 }} />
            <Button onPress={handleLogin}>
                <ButtonText>ENTRAR</ButtonText>
            </Button>
            <Button onPress={handleSignUp}>
                <ButtonText>CADASTRAR</ButtonText>
            </Button>
        </Container>
    );
};

// Estilos para o GIF
const styles = StyleSheet.create({
    gif: {
        width: 250, // Largura do GIF
        height: 250, // Altura do GIF
        alignSelf: 'center', // Centraliza horizontalmente
        marginBottom: 10, // Espaço abaixo do GIF
        marginTop: -20, // Espaço abaixo do GIF
    },
});

export default Login;
