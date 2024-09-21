import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export enum RootRoutes {
  ABOUT = 'About',
  HOME = 'Home',
  PRODUCTS = 'Products',
  USERS = 'Users',
  USER_GRAPH = 'UserGraph',
  TRANSACTIONS = 'Transactions',
}

export type RootStackParamList = {
  About: undefined;
  Home: undefined;
  Products: undefined;
  Users: undefined;
  UserGraph: { userId: string };
  Transactions: undefined;
};

export type HomeNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  RootRoutes.HOME
>;

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

export type UserGraphNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  RootRoutes.USER_GRAPH
>;

export type UserGraphRouteProp = RouteProp<RootStackParamList, RootRoutes.USER_GRAPH>;

export type TransactionsNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  RootRoutes.TRANSACTIONS
>;
