import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Favorites" />
      <Text style={styles.text}>Your favorite items will appear here.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 18, color: '#C2185B' }
});

export default FavoritesScreen;