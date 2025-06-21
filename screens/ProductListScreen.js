import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

const ProductListScreen = ({ navigation }) => {
  const handleAddToCart = (product) => {
    alert(`${product.name} added to cart!`);
    navigation.navigate('Cart');
  };

  const handleBuyNow = (product) => {
    navigation.navigate('Cart');
  };

  return (
    <View style={styles.container}>
      <Header title="Menu" onCartPress={() => navigation.navigate('Cart')} />
      <FlatList
        data={products.slice(10, 20)}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0F5',
  },
  grid: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default ProductListScreen;