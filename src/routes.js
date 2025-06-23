import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/login';
import SignUp from './pages/signUp';
import Main from './pages/main';
import Character from './pages/character';

const Stack = createStackNavigator();

const headerOptions = {
    headerTitleAlign: 'center',
    headerStyle: {
        backgroundColor: '#068EF1',
    },
    headerTitleStyle: {
        fontWeight: 'bold',
        color: '#fff',
    },
};

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='login'
                    component={Login}
                    options={{
                        ...headerOptions,
                        title: 'Login',
                    }}
                />
                <Stack.Screen
                    name='signUp'
                    component={SignUp}
                    options={{
                        ...headerOptions,
                        title: 'Cadastro',
                    }}
                />
                <Stack.Screen
                    name='main'
                    component={Main}
                    options={{
                        ...headerOptions,
                        title: 'Cards',
                        headerTintColor: '#fff',
                    }}
                />
                <Stack.Screen
                    name='character'
                    component={Character}
                    options={{
                        ...headerOptions,
                        title: 'Personagem',
                        headerTintColor: '#fff',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
