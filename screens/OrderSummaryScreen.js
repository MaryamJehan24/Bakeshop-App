import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Header from '../components/Header';

const OrderSummaryScreen = ({ navigation }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    payment: '',
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = () => {
    Alert.alert('Order Confirmed', 'Your order will be delivered shortly!');
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Header title="Checkout" onCartPress={() => navigation.navigate('Cart')} />
      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} onChangeText={(val) => handleChange('name', val)} />
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} onChangeText={(val) => handleChange('email', val)} />
      <Text style={styles.label}>Address</Text>
      <TextInput style={styles.input} onChangeText={(val) => handleChange('address', val)} />
      <Text style={styles.label}>Phone</Text>
      <TextInput style={styles.input} keyboardType="phone-pad" onChangeText={(val) => handleChange('phone', val)} />
      <Text style={styles.label}>Payment Method</Text>
      <TextInput style={styles.input} onChangeText={(val) => handleChange('payment', val)} />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#FFF0F5', flex: 1 },
  label: { marginTop: 10, fontWeight: 'bold', color: '#C2185B' },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#C2185B',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});

export default OrderSummaryScreen;