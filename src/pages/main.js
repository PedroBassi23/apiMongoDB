import React, { Component } from 'react';
import { Keyboard, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../services/api';
import {
    Container,
    Form,
    Input,
    AddButton,
    List,
    Card,
    CardContent,
    Avatar,
    CardInfos,
    Name,
    Status,
    LabelText,
    InfoText,
    CardButtons,
    CardButton,
    CardButtonText,
} from './styles';


export default class Main extends Component {

    state = {
        newCharacter: '',
        characters: [],
        loading: false,
    };

    async componentDidMount(_, prevState) {
        const characters = await AsyncStorage.getItem('characters');

        if (characters) {
            this.setState({ characters: JSON.parse(characters) });
        }
    };

    async componentDidUpdate(_, prevState) {
        const { characters } = this.state;

        if (prevState.characters !== characters) {
            await AsyncStorage.setItem('characters', JSON.stringify(characters));
        }
    };

    handleAddCharacter = async () => {
        try {
            const { characters, newCharacter } = this.state;
            this.setState({ loading: true });

            const response = await api.get(`/character/?name=${newCharacter}`);
            const data = response.data.results[0];

            if(characters.find(character => character.id === data.id)) {
                alert("PERSONAGEM ADICIONADO!");
                this.setState({
                    loading: false,
                    newCharacter: '',
                });
                Keyboard.dismiss();
                return;
            }

            const firstEpisodeResponse = await api.get(data.episode[0]);

            const mappedData = {
                id: data.id,
                name: data.name,
                gender: data.gender,
                status: data.status,
                species: data.species,
                type: data.type,
                image: data.image,
                location: data.location.name,
                origin: data.origin?.name,
                episode: firstEpisodeResponse.data.name,
                created: data.created,
            };

            this.setState({
                characters: [...characters, mappedData],
                newCharacter: '',
                loading: false,
            });

            Keyboard.dismiss();
        } catch (error) {
            console.log(error);
            alert('Algo de errado!');
            this.setState({ loading: false });
            Keyboard.dismiss();
        }
    };

    render() {
        const { newCharacter, characters, loading } = this.state;

        return(
            <Container>
                <Form>
                    <Input
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="ADICIONAR PERSONAGEM"
                        placeholderTextColor="#FFFFFF"
                        color="#000"
                        value={newCharacter}
                        onChangeText={text => this.setState({newCharacter: text})}
                        returnKeyType="send"
                        onSubmitEditing={this.handleAddCharacter}
                    />
                    <AddButton loading={loading} onPress={this.handleAddCharacter}>
                        {loading ? (
                            <ActivityIndicator color="#fff" />
                        ) : (
                            <Icon name="add" size={20} color="#fff" border-size="2px" border-color="#ffffff"/>
                        )}
                    </AddButton>
                </Form>

                <List
                    showsVerticalScrollIndicator={false}
                    data={characters}
                    keyExtractor={character => character.id}
                    renderItem={({item}) => (
                        <Card>
                            <CardContent>
                                <Avatar source={{uri: item.image}} />
                                <CardInfos>
                                    <Name>{item.name}</Name>
                                    <Status>{item.status} - {item.species}</Status>
                                    <LabelText>Última localização:</LabelText>
                                    <InfoText>{item.location}</InfoText>
                                    <LabelText>Primeira aparição:</LabelText>
                                    <InfoText>{item.episode}</InfoText>
                                </CardInfos>
                            </CardContent>
                            <CardButtons>
                                <CardButton
                                    onPress={() => {
                                        this.props.navigation.navigate('character', { character: item });
                                    }}
                                >
                                    <CardButtonText>+ DETALHES</CardButtonText>
                                </CardButton>
                                <CardButton
                                    onPress={() => {
                                        this.setState({
                                            characters: this.state.characters.filter(
                                                character => character.id !== item.id,
                                            ),
                                        });
                                    }}
                                    style={{backgroundColor: 'red', borderRadius: 20}}
                                >
                                    <CardButtonText>EXCLUIR</CardButtonText>
                                </CardButton>
                            </CardButtons>
                        </Card>
                    )}
                />
            </Container>
        )
    };
};