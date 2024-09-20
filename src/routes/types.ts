import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export enum RootRoutes {
  ABOUT = 'About',
  HOME = 'Home',
  PRODUCTS = 'Products',
  USERS = 'Users'
}

export type RootStackParamList = {
  About: undefined;
  Home: undefined;
  Products: undefined;
  Users: undefined;
};

export type AboutNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  RootRoutes.ABOUT
>;

export type ProductsNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  RootRoutes.PRODUCTS
>;

export type UsersNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  RootRoutes.USERS
>;
