import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export enum RootRoutes {
  ABOUT = 'About',
  DASHBOARD = 'Dashboard',
  PRODUCTS = 'Products',
  USERS = 'Users',
  TRANSACTIONS = 'Transactions',
}

export type RootStackParamList = {
  About: undefined;
  Dashboard: undefined;
  Products: undefined;
  Users: undefined;
  UserGraph: { userId: string };
  Transactions: undefined;
};

export type DashboardNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  RootRoutes.DASHBOARD
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

export type TransactionsNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  RootRoutes.TRANSACTIONS
>;
