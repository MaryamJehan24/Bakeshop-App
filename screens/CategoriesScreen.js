import React, { useState } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  StyleSheet, 
  Alert, 
  SafeAreaView, 
  TouchableOpacity,
  Image
} from 'react-native';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';

const categories = [
  { 
    id: 'cat1', 
    name: 'Cakes',
    image: 'https://flouringkitchen.com/wp-content/uploads/2023/07/BW1A4089-3.jpg'
  },
  { 
    id: 'cat2', 
    name: 'Cupcakes',
    image: 'https://bonnibakery.com/wp-content/uploads/2024/03/Chocolate-Cupcakes_52.jpg.webp'
  },
  { 
    id: 'cat3', 
    name: 'Tarts',
    image: 'https://www.abakingjourney.com/wp-content/uploads/2022/04/Mini-Fruit-Tarts-Feature.jpg'
  },
  { 
    id: 'cat4', 
    name: 'Cookies',
    image: 'https://img.taste.com.au/puSNvmqQ/taste/2010/01/chocolate-chip-cookies-cropped-199866-1.jpg'
  },
  { 
    id: 'cat5', 
    name: 'Pastries',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=400&q=80'
  },
  { 
    id: 'cat6', 
    name: 'Pies',
    image: 'https://properfoodie.com/wp-content/uploads/2020/12/mince-pies-15.jpg'
  },
  { 
    id: 'cat7', 
    name: 'Muffins',
    image: 'https://static01.nyt.com/images/2024/12/05/multimedia/SS-Chocolate-Banana-Muffins-jfvl/SS-Chocolate-Banana-Muffins-jfvl-master768.jpg?quality=75&auto=webp'
  },
  { 
    id: 'cat8', 
    name: 'Macarons',
    image: 'https://stylesweet.com/wp-content/uploads/2023/01/EasterMacarons_08.jpg'
  },
  { 
    id: 'cat9', 
    name: 'Bread',
    image: 'https://www.foodandwine.com/thmb/C8XvnSkIMvz2XewXFDB_JYK-mSU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Perfect-Sandwich-Bread-FT-RECIPE0723-dace53e15a304942acbc880b0ae34f5a.jpg'
  },
  { 
    id: 'cat10', 
    name: 'Desserts',
    image: 'https://c.ndtvimg.com/2020-04/chd4rs3g_dessert_625x300_07_April_20.jpg'
  },
];

const productsByCategory = {
  cat1: [
    {
      id: 'c1p1',
      name: 'Black Forest Cake',
      description: 'Chocolate cake with cherries',
      price: 280,
      image: 'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/black_forest_gateau_43895_16x9.jpg',
    },
    {
      id: 'c1p2',
      name: 'Red Velvet Cake',
      description: 'Rich red velvet',
      price: 300,
      image: 'https://www.rainbownourishments.com/wp-content/uploads/2023/05/vegan-red-velvet-cake-1.jpg',
    },
    {
      id: 'c1p3',
      name: 'Fruit Cake',
      description: 'Seasonal fruit cake',
      price: 320,
      image: 'https://bakewithshivesh.com/wp-content/uploads/2021/06/IMG_9642-1639x2048.jpg',
    },
  ],
  cat2: [
    {
      id: 'c2p1',
      name: 'Vanilla Cupcake',
      description: 'Classic vanilla flavor',
      price: 120,
      image: 'https://recipesforholidays.com/wp-content/uploads/2021/08/Classic-Vanilla-Cupcakes-5.jpeg',
    },
    {
      id: 'c2p2',
      name: 'Chocolate Cupcake',
      description: 'Chocolate flavored cupcake',
      price: 130,
      image: 'https://preppykitchen.com/wp-content/uploads/2023/08/Chocolate-Cupcake-Recipe-Feature.jpg',
    },
    {
      id: 'c2p3',
      name: 'Strawberry Cupcake',
      description: 'Fresh strawberry topping',
      price: 140,
      image: 'https://www.lifeloveandsugar.com/wp-content/uploads/2021/03/Fresh-Strawberry-Cupcakes3.jpg',
    },
  ],
  cat3: [
    {
      id: 'c3p1',
      name: 'Lemon Tart',
      description: 'Classic Lemon flavor',
      price: 120,
      image: 'https://www.elmundoeats.com/wp-content/uploads/2022/03/Healthy-lemon-tarts-on-a-rack-view-from-front-2.jpg',
    },
    {
      id: 'c3p2',
      name: 'Fruit Tart',
      description: 'Fresh Fruit Tart',
      price: 130,
      image: 'https://richanddelish.com/wp-content/uploads/2023/05/mini-fruit-tarts-11-of-17.jpg',
    },
    {
      id: 'c3p3',
      name: 'Jam Tart',
      description: 'Fresh Jam topping',
      price: 140,
      image: 'https://www.rainbownourishments.com/wp-content/uploads/2022/06/vegan-jam-tarts-1.jpg',
    },
  ],
  cat4: [
    {
      id: 'c4p1',
      name: 'Chocolate Chip Cookie',
      description: 'Fresh Chocolate Chip Endulged',
      price: 120,
      image: 'https://static01.nyt.com/images/2022/02/12/dining/JT-Chocolate-Chip-Cookies/JT-Chocolate-Chip-Cookies-master768.jpg?quality=75&auto=webp',
    },
    {
      id: 'c4p2',
      name: 'MnM Cookie',
      description: 'Colorful MnM Chocolate Flavor',
      price: 130,
      image: 'https://www.southernliving.com/thmb/h6-t4x9OOc3zJPiDjmdC4prBC9o=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Monster_Cookies_010-2996b6446e834ad1b093ef08b6828160.jpg',
    },
    {
      id: 'c4p3',
      name: 'Ice cream Cookie',
      description: 'Ice cream topping with fresh Cookie',
      price: 140,
      image: 'https://www.thevanillabeanblog.com/wp-content/uploads/2020/09/neapolitan-cookiesJPG.jpg',
    },
  ],
  cat5: [
    {
      id: 'c5p1',
      name: 'Chocolate Pastry',
      description: 'Fresh Chocolate Endulged',
      price: 120,
      image: 'https://cdn.uengage.io/uploads/7175/image-W8EU8R-1681839318.jpg',
    },
    {
      id: 'c5p2',
      name: 'Mango Pastry',
      description: 'Mango Flavor Moist Pastry',
      price: 130,
      image: 'https://ribbonsandballoons.com/assets1/uploads/Mango_Pastry_copy_227358.jpg',
    },
    {
      id: 'c5p3',
      name: 'Strawberry Pastry',
      description: 'Strawberry Flavor Moist Pastry',
      price: 140,
      image: 'https://abicake.com/cdn/shop/files/Strawberry-Pastries.png?v=1703506485',
    },
  ],
    cat6: [
    {
      id: 'c6p1',
      name: 'Cherry Pie',
      description: 'Endulged Flavor of Cherry',
      price: 120,
      image: 'https://insanelygoodrecipes.com/wp-content/uploads/2021/11/Sweet-Cranberry-Pie-683x1024.jpg',
    },
    {
      id: 'c6p2',
      name: 'Blueberry pie',
      description: 'Endulged Flavor of Blueberries',
      price: 130,
      image: 'https://www.vibrantplate.com/wp-content/uploads/2021/06/No-Bake-Vegan-Blueberry-Pie-03-vibrantplate-830x1245.jpg.webp',
    },
    {
      id: 'c6p3',
      name: 'Jam Filled Pies',
      description: 'Jam Filled Hand Pies',
      price: 140,
      image: 'https://www.bhg.com/thmb/NMkmy8JMTJk1daVVwwtPympTgTU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/jam-filled-hand-pies-RU314216-2580864085874c4fb6eae8da383c64fb.jpg',
    },
  ],
   cat7: [
    {
      id: 'c7p1',
      name: 'Chocolate Muffins',
      description: 'Endulged Flavor of Chocolate',
      price: 120,
      image: 'https://www.rainbownourishments.com/wp-content/uploads/2024/02/vegan-chocolate-muffins-1.jpg',
    },
    {
      id: 'c7p2',
      name: 'Mango Muffins',
      description: 'Freshly Baked Mango Muffins',
      price: 130,
      image: 'https://funcakes.com/content/uploads/2019/11/Muffins-1000x750.webp',
    },
    {
      id: 'c7p3',
      name: 'Strawberry muffins',
      description: 'Freshly Baked Strawberry Muffins',
      price: 140,
      image: 'https://www.twopeasandtheirpod.com/wp-content/uploads/2022/05/Strawberry-Muffins-28.jpg',
    },
  ],
  cat8: [
    {
      id: 'c8p1',
      name: 'Strawberry Macarons',
      description: 'Endulged Flavor of Strawberry',
      price: 120,
      image: 'https://www.southernliving.com/thmb/u-cB0HQhbe8zwmGp7YA3fIR0MRo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Southern-Living_Macarons_025-0e05e0cd226d44609f55ed8bc9cd3a3e.jpg',
    },
    {
      id: 'c8p2',
      name: 'Rainbow Macarons',
      description: 'Freshly Baked Fruit Macarons',
      price: 130,
      image: 'https://funcakes.com/content/uploads/2022/05/Fun-Cakes-20201119-Glutenvrije-Macarons-02-1000x667.webp',
    },
    {
      id: 'c8p3',
      name: 'Chocolate Macarons',
      description: 'Freshly Baked Chocolate Macarons',
      price: 140,
      image: 'https://thescranline.com/wp-content/uploads/2024/09/CHOOCLATE-MACARONS-WEB-04-768x1024.jpg',
    },
  ],
  cat9: [
    {
      id: 'c9p1',
      name: 'Swrill Cheese Bread',
      description: 'Rich Flavor of Cheese',
      price: 120,
      image: 'https://allourway.com/wp-content/uploads/2016/08/Herb-Cheese-Swirl-Pane-Italiano-Sliced-b.jpg',
    },
    {
      id: 'c9p2',
      name: 'Almond and Walnut Bread',
      description: 'Freshly Baked DryFruit Bread',
      price: 130,
      image: 'https://merryboosters.com/wp-content/uploads/2021/11/fruit-loaf-768x432.png.webp',
    },
    {
      id: 'c9p3',
      name: 'Peach Zucchini Bread',
      description: 'Freshly Baked Peach  Bread',
      price: 140,
      image: 'https://naturallieplantbased.com/wp-content/uploads/2023/06/peach-zucchini-bread-01.jpg',
    },
  ],
  cat10: [
    {
      id: 'c10p1',
      name: 'Churros',
      description: 'Fresh and Crunchy Churros',
      price: 120,
      image: 'https://www.happyfoodstube.com/wp-content/uploads/2015/09/homemade-churros-picture.jpg',
    },
    {
      id: 'c10p2',
      name: 'Rassberry Sundae',
      description: 'Fresh Rassberry Flavor',
      price: 130,
      image: 'https://www.happyfoodstube.com/wp-content/uploads/2018/08/raspberry-oreo-no-bake-dessert-picture.jpg',
    },
    {
      id: 'c10p3',
      name: 'Oreo Truffle',
      description: 'Fresh Oreo Flavor',
      price: 140,
      image: 'https://www.fifteenspatulas.com/wp-content/uploads/2022/11/Oreo-Truffles-Easy-Dessert-Recipes.jpg',
    },
  ]
};

const CategoriesScreen = ({ navigation, screenProps }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { addToCart } = screenProps || {};

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleAddToCart = (product) => {
    if (addToCart) {
      addToCart(product);
      Alert.alert('Success', 'Added to cart successfully');
    }
  };

  const handleBuyNow = (product) => {
    if (addToCart) {
      addToCart(product);
      navigation.navigate('Cart');
    }
  };

  return (
    <View style={styles.container}>
      <Header 
        title="Categories" 
        navigation={navigation} 
        onCartPress={() => navigation.navigate('Cart')} 
      />

      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesList}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.categoryItem,
              selectedCategory === item.id && styles.categoryItemSelected,
            ]}
            onPress={() => handleCategorySelect(item.id)}
          >
            <Image
              source={{ uri: item.image }}
              style={styles.categoryImage}
            />
            <Text
              style={[
                styles.categoryText,
                selectedCategory === item.id && styles.categoryTextSelected,
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />

      {selectedCategory ? (
        <FlatList
          data={productsByCategory[selectedCategory] || []}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductCard
              product={item}
              onAddToCart={handleAddToCart}
              onBuyNow={handleBuyNow}
            />
          )}
          numColumns={2}
          contentContainerStyle={styles.productsList}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.selectPrompt}>
          <Text style={styles.selectPromptText}>Select a category to view products</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff0f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#c71585',
    textAlign: 'center',
    marginVertical: 16,
  },
  categoriesList: {
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  categoryItem: {
    width: 100,
    alignItems: 'center',
    marginRight: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 8,
    elevation: 3,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  categoryItemSelected: {
    backgroundColor: '#c71585',
  },
  categoryText: {
    color: '#c71585',
    fontWeight: '600',
    fontSize: 12,
    textAlign: 'center',
  },
  categoryTextSelected: {
    color: '#fff',
  },
  productsList: {
    padding: 8,
    paddingBottom: 20,
  },
  selectPrompt: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  selectPromptText: {
    fontSize: 16,
    color: '#c71585',
    textAlign: 'center',
  },
});

export default CategoriesScreen;