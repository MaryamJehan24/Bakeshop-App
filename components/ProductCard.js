import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductCard = ({ product, onAddToCart, onBuyNow }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>
        Rs{typeof product.price === 'number' ? product.price.toFixed(2) : '0.00'}
      </Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.addToCartButton} onPress={() => onAddToCart(product)}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyNowButton} onPress={() => onBuyNow(product)}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: '#fff0f5',
    borderRadius: 12,
    padding: 12,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#c71585', // dark pink
    marginTop: 8,
  },
  description: {
    fontSize: 14,
    color: '#ff69b4', // light pink
    marginTop: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#c71585',
    marginTop: 6,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 12,
    justifyContent: 'space-between',
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: '#ff69b4', // light pink
    paddingVertical: 8,
    borderRadius: 8,
    marginRight: 8,
    alignItems: 'center',
  },
  buyNowButton: {
    flex: 1,
    backgroundColor: '#c71585', // dark pink
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default ProductCard;