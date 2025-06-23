import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const Cards = ({ navigation }) => {
  const [cards, setCards] = useState([]);

  const fetchCards = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character/');
      setCards(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const deleteCard = (id) => {
    setCards(cards.filter(card => card.id !== id));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{item.name}</Text>
            </View>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity 
                style={styles.detailsButton}
                onPress={() => navigation.navigate('Detalhes', { item })}
              >
                <Text style={styles.detailsButtonText}>Mais Detalhes</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.deleteButton}
                onPress={() => deleteCard(item.id)}
              >
                <Text style={styles.deleteButtonText}>X</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};




export default Cards;
