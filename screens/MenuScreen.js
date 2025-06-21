import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Alert, SafeAreaView } from 'react-native';
import ProductCard from '../components/ProductCard';

const menuProducts = [
  {
    id: '101',
    name: 'Black Forest Cake',
    description: 'Chocolate cake with cherries and cream',
    price: 280,
    image: 'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/black_forest_gateau_43895_16x9.jpg',
  },
  {
    id: '102',
    name: 'Banana Bread',
    description: 'Moist banana flavored bread',
    price: 130,
    image: 'https://i0.wp.com/itsallgoodvegan.com/wp-content/uploads/2020/07/IMG_5759.jpg?w=1463&ssl=1',
  },
  {
    id: '103',
    name: 'Cheesecake',
    description: 'Creamy New York style cheesecake',
    price: 350,
    image: 'https://www.marthastewart.com/thmb/jUQwEXuFfwA9v49YKXeFaz8_Njk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/MSL-865202-new-york-cheesecake-hero-horiz-0723-84e3c796119d408581d1ef4d02d801cd.jpg',
  },
  {
    id: '104',
    name: 'Eclairs',
    description: 'Pastry with cream filling',
    price: 150,
    image: 'https://www.theflavorbender.com/wp-content/uploads/2019/03/Chocolate-Eclairs-9252.jpg',
  },
  {
    id: '105',
    name: 'Macaroni Pie',
    description: 'Savory pie with macaroni and cheese',
    price: 170,
    image: 'https://tarasmulticulturaltable.com/wp-content/uploads/2015/12/Trinidad-Macaroni-Pie-2-of-3-1-1024x683.jpg',
  },
  {
    id: '106',
    name: 'Mango Mousse',
    description: 'Light and creamy mango mousse',
    price: 220,
    image: 'https://rumkisgoldenspoon.com/wp-content/uploads/2023/07/Eggless-mango-mousse.jpg',
  },
  {
    id: '107',
    name: 'Oreo Cheesecake',
    description: 'Cheesecake with Oreo biscuit base',
    price: 340,
    image: 'https://www.simplyrecipes.com/thmb/fUmzcp4MxNV7ST6w1Ht1nrrQPNE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Oreo-Cheesecake-LEAD-04-ab9df2c09a1346fe945ddbccf5fa6251.jpg',
  },
  {
    id: '108',
    name: 'Pancakes',
    description: 'Fluffy pancakes with syrup',
    price: 140,
    image: 'https://www.bhg.com/thmb/keXe6ieKx6unKYAii3V9QQHLavo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bhg-recipe-pancakes-waffles-pancakes-Hero-01-372c4cad318d4373b6288e993a60ca62.jpg',
  },
  {
    id: '109',
    name: 'Strawberry Cheesecake',
    description: 'Cheesecake topped with fresh strawberries',
    price: 360,
    image: 'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/no-bake_strawberry_30276_16x9.jpg',
  },
  {
    id: '110',
    name: 'Tiramisu',
    description: 'Coffee-flavored Italian dessert',
    price: 300,
    image: 'https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2024/09/THUMB-VIDEO-2_rev1-56.jpeg?im=Resize,width=570;',
  },
];

const MenuScreen = ({ navigation }) => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex(item => item.id === product.id);
      if (index >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[index].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    Alert.alert('Success', 'Added to cart successfully');
  };

  const handleBuyNow = (product) => {
    setCart([{ ...product, quantity: 1 }]);
    navigation.navigate('Cart', { cartItems: [{ ...product, quantity: 1 }] });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Menu</Text>

      <FlatList
        data={menuProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            
          />
        )}
        numColumns={2}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff0f5',
    paddingHorizontal: 12,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#c71585',
    textAlign: 'center',
    marginVertical: 16,
  },
  list: {
    paddingBottom: 20,
  },
});

export default MenuScreen;