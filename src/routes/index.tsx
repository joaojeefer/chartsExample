import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AboutScreen, DashboardScreen, ProductsScreen, TransactionsScreen, UsersScreen } from '../screens';
import { RootRoutes, RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={RootRoutes.DASHBOARD}
          component={DashboardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={RootRoutes.ABOUT}
          component={AboutScreen}
          options={{ title: 'Sobre' }}
        />
        <Stack.Screen
          name={RootRoutes.PRODUCTS}
          component={ProductsScreen}
          options={{ title: 'Produtos' }}
        />
        <Stack.Screen
          name={RootRoutes.USERS}
          component={UsersScreen}
          options={{ title: 'Usuários' }}
        />
        <Stack.Screen
          name={RootRoutes.TRANSACTIONS}
          component={TransactionsScreen}
          options={{ title: 'Transações' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
