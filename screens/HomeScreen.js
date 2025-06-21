import React from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  StyleSheet, 
  Alert, 
  SafeAreaView, 
  Image 
} from 'react-native';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';

const products = [
  {
    id: '1',
    name: 'Chocolate Cake',
    description: 'Delicious dark chocolate cake',
    price: 250,
    image: 'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/easy_chocolate_cake_31070_16x9.jpg',
    category: 'Cakes'
  },
  {
    id: '2',
    name: 'Vanilla Cupcake',
    description: 'Classic vanilla flavor cupcake',
    price: 120,
    image: 'https://cicili.tv/wp-content/uploads/2021/11/Vanilla-Cupcakes1-scaled-1536x1024.jpg',
    category: 'Cupcakes'
  },
  {
    id: '3',
    name: 'Strawberry Tart',
    description: 'Fresh strawberry tart with cream',
    price: 180,
    image: 'https://www.nordzuckerireland.ie/Admin/Public/GetImage.ashx?image=%2fFiles%2fproduct-cataloge%2frecipe_large%2fstrawberry-tarts-ie.jpg&width=1920&format=webp',
    category: 'Tarts'
  },
  {
    id: '4',
    name: 'Cheese Croissant',
    description: 'Buttery croissant with cheese',
    price: 90,
    image: 'https://field-fare.com/wp-content/uploads/2021/08/HamCheese_Croissant_hero-1.jpg',
    category: 'Pastries'
  },
  {
    id: '5',
    name: 'Red Velvet Cake',
    description: 'Rich and moist red velvet cake',
    price: 300,
    image: 'https://www.allrecipes.com/thmb/Db2qWDin61jvdKMMNrmtHtTS4E8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ALR-276078-homemade-red-velvet-cake-with-cream-cheese-frosting-VAT-4x3-1135ba47a4b74be28f73df983fc1fd2d.jpg',
    category: 'Cakes'
  },
  {
    id: '6',
    name: 'Blueberry Muffin',
    description: 'Fresh muffins with blueberries',
    price: 110,
    image: 'https://www.southernliving.com/thmb/a-EXZVY1Whkk2JXY_ZckSgAmy_w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/southern-living-Blueberry-muffins-02-3x2-122e84ef1a36441298329be90e2b1785.jpg',
    category: 'Muffins'
  },
  {
    id: '7',
    name: 'Macarons',
    description: 'Colorful French macarons',
    price: 250,
    image: 'https://www.midwestliving.com/thmb/Udyx8ZKU2Wqs_O_8AYFy-msJgHg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/CD_1140_macarons-2000-4425cb0d8eaf4dcfbdb20225b0ed1e2a.jpg',
    category: 'Macarons'
  },
  {
    id: '8',
    name: 'Chocolate Chip Cookies',
    description: 'Crispy cookies with chocolate chips',
    price: 80,
    image: 'https://static01.nyt.com/images/2022/02/12/dining/JT-Chocolate-Chip-Cookies/JT-Chocolate-Chip-Cookies-master768.jpg?quality=75&auto=webp',
    category: 'Cookies'
  },
  {
    id: '9',
    name: 'Fruit Cake',
    description: 'Seasonal fruit cake with nuts',
    price: 320,
    image: 'https://hips.hearstapps.com/hmg-prod/images/fruit-cake-recipe-1630084221.jpg?crop=0.668xw:1.00xh;0.136xw,0&resize=1200:*',
    category: 'Cakes'
  },
  {
    id: '10',
    name: 'Lemon Pie',
    description: 'Tangy lemon pie with meringue',
    price: 200,
    image: 'https://dinnerthendessert.com/wp-content/uploads/2023/06/Lemon-Pie-9.jpg',
    category: 'Pies'
  },
];

const HomeScreen = ({ navigation, screenProps }) => {
  const { addToCart } = screenProps;

  const handleAddToCart = (product) => {
    addToCart(product);
    Alert.alert('Added to Cart', `${product.name} was added to your cart`);
  };

  const handleBuyNow = (product) => {
    addToCart(product);
    navigation.navigate('Cart');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title="M&M Bakeshop" 
        navigation={navigation} 
        onCartPress={() => navigation.navigate('Cart')} 
      />

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onAddToCart={() => handleAddToCart(item)}
            onBuyNow={() => handleBuyNow(item)}
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
  },
  list: {
    padding: 8,
    paddingBottom: 20,
  },
});

export default HomeScreen;