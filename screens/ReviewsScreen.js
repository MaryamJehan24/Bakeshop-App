import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Header from '../components/Header';

const reviews = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  author: `Customer ${i + 1}`,
  review: 'The best bakery in town! Everything is fresh and tasty.',
}));

const ReviewsScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Header title="Reviews" onCartPress={() => navigation.navigate('Cart')} />
    <FlatList
      data={reviews}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.grid}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.author}>{item.author}</Text>
          <Text style={styles.review}>{item.review}</Text>
        </View>
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF0F5' },
  grid: { padding: 10 },
  row: { justifyContent: 'space-between', marginBottom: 10 },
  card: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    elevation: 3,
  },
  author: { fontWeight: 'bold', color: '#C2185B' },
  review: { marginTop: 5 },
});

export default ReviewsScreen;