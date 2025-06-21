import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Button from '../components/Button';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.desc}>{product.description}</Text>
      <Button title="Add to Cart" onPress={() => alert('Added to Cart')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center' },
  image: { width: 200, height: 200, borderRadius: 10 },
  name: { fontSize: 24, fontWeight: 'bold', color: '#C2185B', marginVertical: 10 },
  price: { fontSize: 18, color: '#880E4F' },
  desc: { marginVertical: 10, textAlign: 'center' }
});
export default ProductDetailScreen;