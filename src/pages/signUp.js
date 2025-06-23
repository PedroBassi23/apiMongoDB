import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Keyboard } from 'react-native';
import { Container, Input, Button, ButtonText } from './styles';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        cpf: '',
        email: '',
        course: '',
        password: ''
    });

    const navigation = useNavigation();

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleLogin = () => {
        console.log(`CADASTRO - Nome: ${formData.name} - Telefone: ${formData.phone} - CPF: ${formData.cpf} - E-mail: ${formData.email} - Curso: ${formData.course} - Senha: ${formData.password}`);
        alert('Cadastro realizado!');
        navigation.navigate('login');
        Keyboard.dismiss();
    };

    const inputs = [
        { placeholder: "NOME", value: formData.name, keyboardType: "default", field: "name" },
        { placeholder: "TELEFONE", value: formData.phone, keyboardType: "phone-pad", field: "phone" },
        { placeholder: "CPF", value: formData.cpf, keyboardType: "numeric", field: "cpf" },
        { placeholder: "E-MAIL", value: formData.email, keyboardType: "email-address", field: "email" },
        { placeholder: "CURSO", value: formData.course, keyboardType: "default", field: "course" },
        { placeholder: "SENHA", value: formData.password, keyboardType: "default", field: "password", secureTextEntry: true }
    ];

    return (
        <Container>
            {inputs.map(({ placeholder, value, keyboardType, field, secureTextEntry }) => (
                <Input
                    key={field}
                    placeholder={placeholder}
                    placeholderTextColor="#ccc"
                    color="#000"
                    value={value}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    onChangeText={(text) => handleInputChange(field, text)}
                />
            ))}
            <Button onPress={handleLogin}>
                <ButtonText>CADASTRAR</ButtonText>
            </Button>
        </Container>
    );
};

export default SignUp;
