import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductListScreen from '../screens/ProductListScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import ReviewsScreen from '../screens/ReviewsScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import CartScreen from '../screens/CartScreen';
import OrderSummaryScreen from '../screens/OrderSummaryScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerScreens({ screenProps }) {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: '#d6336c',
        drawerInactiveTintColor: '#ff69b4',
        drawerStyle: { backgroundColor: '#fff0f5' }
      }}
    >
      <Drawer.Screen name="Home">
        {props => <HomeScreen {...props} screenProps={screenProps} />}
      </Drawer.Screen>
      <Drawer.Screen name="Menu">
        {props => <ProductListScreen {...props} screenProps={screenProps} />}
      </Drawer.Screen>
      <Drawer.Screen name="Categories">
        {props => <CategoriesScreen {...props} screenProps={screenProps} />}
      </Drawer.Screen>
      <Drawer.Screen name="Reviews">
        {props => <ReviewsScreen {...props} screenProps={screenProps} />}
      </Drawer.Screen>
      <Drawer.Screen name="About Us">
        {props => <AboutUsScreen {...props} screenProps={screenProps} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default function AppNavigator({ screenProps }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main">
        {props => <DrawerScreens {...props} screenProps={screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="Cart">
        {props => <CartScreen {...props} screenProps={screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="Checkout">
        {props => <OrderSummaryScreen {...props} screenProps={screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="Login">
        {props => <LoginScreen {...props} screenProps={screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="Signup">
        {props => <SignupScreen {...props} screenProps={screenProps} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}