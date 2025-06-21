import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView
} from 'react-native';
import Header from '../components/Header';
import { Ionicons } from '@expo/vector-icons';

const CartScreen = ({ navigation, screenProps }) => {
  const { cartItems, removeFromCart, clearCart } = screenProps;

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      Alert.alert('Empty Cart', 'Please add items to your cart first');
      return;
    }
    navigation.navigate('Checkout');
  };

  const handleBrowseProducts = () => {
    try {
      // Try direct navigation
      navigation.navigate('Home');
    } catch (e) {
      // Fallback: reset navigation to Home
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }]
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header
        title="Your Cart"
        navigation={navigation}
        onCartPress={() => navigation.navigate('Cart')}
      />

      {cartItems.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Ionicons name="cart-outline" size={80} color="#C2185B" />
          <Text style={styles.emptyText}>Your cart is empty</Text>
          {/* <TouchableOpacity style={styles.shopButton} onPress={handleBrowseProducts}> */}
            {/* <Text style={styles.shopButtonText}>Browse Products</Text> */}
          {/* </TouchableOpacity> */}
        </View>
      ) : (
        <>
          <ScrollView contentContainerStyle={styles.itemsContainer}>
            <FlatList
              data={cartItems}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.item}>
                  <View style={styles.itemInfo}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.price}>
                      Rs{item.price} x {item.quantity}
                    </Text>
                    <Text style={styles.subtotal}>
                      Rs{(item.price * item.quantity).toFixed(2)}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={styles.removeButton}
                    onPress={() => removeFromCart(item.id)}
                  >
                    <Ionicons name="trash-outline" size={20} color="#C2185B" />
                  </TouchableOpacity>
                </View>
              )}
            />
          </ScrollView>

          <View style={styles.summaryContainer}>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Total:</Text>
              <Text style={styles.totalAmount}>Rs{calculateTotal().toFixed(2)}</Text>
            </View>
            <TouchableOpacity style={styles.checkoutBtn} onPress={handleCheckout}>
              <Text style={styles.checkoutText}>Proceed to Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0F5',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 18,
    color: '#C2185B',
    marginVertical: 20,
  },
  shopButton: {
    backgroundColor: '#C2185B',
    padding: 15,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  shopButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemsContainer: {
    padding: 15,
    paddingBottom: 100,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
  },
  itemInfo: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  price: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  subtotal: {
    fontSize: 16,
    color: '#C2185B',
    marginTop: 5,
    fontWeight: 'bold',
  },
  removeButton: {
    padding: 8,
  },
  summaryContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#C2185B',
  },
  checkoutBtn: {
    backgroundColor: '#C2185B',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  checkoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CartScreen;
