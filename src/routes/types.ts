import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export enum RootRoutes {
  ABOUT = 'About',
  HOME = 'Home',
  PRODUCTS = 'Products',
  USERS = 'Users',
  USER_GRAPH = 'UserGraph'
}

export type RootStackParamList = {
  About: undefined;
  Home: undefined;
  Products: undefined;
  Users: undefined;
  UserGraph: { userId: string };
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

export type UserGraphNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  RootRoutes.USER_GRAPH
>;

export type UserGraphRouteProp = RouteProp<RootStackParamList, RootRoutes.USER_GRAPH>;
