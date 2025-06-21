import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import * as SplashScreen from 'expo-splash-screen';
import { View, Image, StyleSheet, Text } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setTimeout(async () => {
      setAppIsReady(true);
      await SplashScreen.hideAsync();
    }, 3000); // 3-second splash
  }, []);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const clearCart = () => setCartItems([]);

  if (!appIsReady) {
    return (
      <View style={styles.splash}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
        <Text style={styles.name}>M&M Bakeshop</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <AppNavigator 
        screenProps={{
          cartItems,
          addToCart,
          removeFromCart,
          clearCart
        }}
      />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: '#F8BBD0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  name: {
    marginTop: 20,
    fontSize: 26,
    fontWeight: 'bold',
    color: '#C2185B',
  },
});