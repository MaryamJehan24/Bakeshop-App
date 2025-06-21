import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Header from '../components/Header';

export default function CheckoutScreen({ navigation, cartItems, clearCart }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');

  const submitOrder = () => {
    if (!name || !phone || !email || !address || !paymentMethod) {
      Alert.alert('Error', 'Please fill all fields to proceed.');
      return;
    }
    Alert.alert(
      'Order Confirmed',
      'Thank you for your order! Your delicious treats will arrive soon.',
      [
        {
          text: 'OK',
          onPress: () => {
            clearCart();
            navigation.navigate('Home');
          },
        },
      ]
    );
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Header navigation={navigation} title="Checkout" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.input}
          placeholder="Enter your full name"
        />
        <Text style={styles.label}>Phone:</Text>
        <TextInput
          value={phone}
          onChangeText={setPhone}
          style={styles.input}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
        />
        <Text style={styles.label}>Email:</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholder="Enter your email address"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={styles.label}>Address:</Text>
        <TextInput
          value={address}
          onChangeText={setAddress}
          style={[styles.input, { height: 80 }]}
          placeholder="Enter your delivery address"
          multiline
        />
        <Text style={styles.label}>Payment Method:</Text>
        <View style={styles.paymentMethods}>
          {['Credit Card', 'PayPal', 'Cash on Delivery'].map((method) => (
            <TouchableOpacity
              key={method}
              style={[
                styles.paymentButton,
                paymentMethod === method && styles.paymentSelected,
              ]}
              onPress={() => setPaymentMethod(method)}
            >
              <Text
                style={[
                  styles.paymentText,
                  paymentMethod === method && styles.paymentTextSelected,
                ]}
              >
                {method}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={submitOrder}>
          <Text style={styles.submitButtonText}>Submit Order</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    marginTop: 15,
    marginBottom: 6,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  paymentMethods: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  paymentButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#d81b60',
  },
  paymentSelected: {
    backgroundColor: '#d81b60',
  },
  paymentText: {
    color: '#d81b60',
    fontWeight: 'bold',
  },
  paymentTextSelected: {
    color: '#fff',
  },
  submitButton: {
    backgroundColor: '#d81b60',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});