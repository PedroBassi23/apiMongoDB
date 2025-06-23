import React, { Component } from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import {
    Container,
    Card,
    Avatar,
    Name,
    Status,
    LabelText,
    InfoText,
} from "./styles";

export default class Character extends Component {
    render() {
        const { character } = this.props.route.params;
        const formattedDate = moment(character.created).format("MMMM Do YYYY, h:mm:ss a");

        const renderStatusIcon = () => {
            const statusIcons = {
                Alive: <Icon name='check-box' size={12} color='#0f0' />,
                Dead: <Icon name='cancel' size={12} color='#f00' />,
                unknown: <Icon name='circle' size={12} color='#808080' />
            };
            return statusIcons[character.status] || statusIcons.unknown;
        };

        return (
            <Container style={{ justifyContent: 'top', paddingTop: 15 }}>
                <Card style={{ width: '90%' }}>
                    <Avatar source={{ uri: character.image }} />
                    <Name>{character.name}</Name>

                    <LabelText>Sexo: <InfoText>{character.gender}</InfoText></LabelText>


                    <LabelText>Criado em:</LabelText>
                    <InfoText>{formattedDate}</InfoText>

                    <Status>
                        <LabelText>Status: </LabelText>
                        <LabelText>
                            {renderStatusIcon()}
                            {character.status}
                        </LabelText>
                    </Status>

                    <LabelText>Espécies: <InfoText>{character.species}</InfoText></LabelText>

                    <LabelText>Última localização:  <InfoText>{character.location}</InfoText></LabelText>


                    <LabelText>Primeira aparição: <InfoText>{character.episode}</InfoText></LabelText>

                </Card>
            </Container>
        );
    }
}
