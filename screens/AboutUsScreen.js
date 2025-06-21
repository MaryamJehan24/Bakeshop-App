import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';

const AboutUsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header 
        title="About Us" 
        navigation={navigation} 
        onCartPress={() => navigation.navigate('Cart')} 
      />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading}>Our Story</Text>
        <Text style={styles.text}>
          M&M Bakeshop has been delighting customers since 2010 with freshly baked cakes, pastries,
          cookies, and custom desserts. Our passion for baking and our commitment to quality ensure
          that every bite is memorable.
        </Text>
        <Text style={styles.text}>
          What started as a small family-owned bakery has grown into a beloved local institution. 
          We use the finest ingredients and traditional techniques passed down through generations 
          to create delicious, high-quality baked goods.
        </Text>
        
        <Text style={styles.heading}>Our Values</Text>
        <Text style={styles.text}>
          • Quality ingredients from trusted local suppliers
          {'\n'}• Handcrafted with care and attention to detail
          {'\n'}• Commitment to sustainability
          {'\n'}• Exceptional customer service
        </Text>
        
        <Text style={styles.heading}>Visit Us</Text>
        <Text style={styles.text}>
          123 Baker Street, Sweetville
          {'\n'}Open daily: 7am - 7pm
          {'\n'}Phone: (123) 456-7890
          {'\n'}Email: info@mmbakeshop.com
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0F5',
  },
  content: {
    padding: 20,
    paddingBottom: 40, // Added extra padding at bottom
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#C2185B',
    marginTop: 15,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 15,
  },
});

export default AboutUsScreen;