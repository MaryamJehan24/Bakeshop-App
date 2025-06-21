import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="My Profile" />
      <Text style={styles.text}>User: admin@example.com</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 18, color: '#C2185B' }
});

export default ProfileScreen;