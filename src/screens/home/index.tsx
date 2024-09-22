import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {HomeNavigationProp, RootRoutes} from '../../routes/types';

import { PointsByProductChart, PointsByProductPerUserChart, UserHistoryPointsChart } from '../../components';

export const HomeScreen = () => {

  const navigation = useNavigation<HomeNavigationProp>();

  function navigateTo(
    screen: RootRoutes.ABOUT | RootRoutes.PRODUCTS | RootRoutes.TRANSACTIONS | RootRoutes.USERS,
  ) {
    navigation.navigate(screen);
  }

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Text onPress={() => navigateTo(RootRoutes.USERS)} style={styles.menu}>
          USUÁRIOS
        </Text>
        <Text onPress={() => navigateTo(RootRoutes.PRODUCTS)} style={styles.menu}>
          PRODUTOS
        </Text>
        <Text onPress={() => navigateTo(RootRoutes.TRANSACTIONS)} style={styles.menu}>
          TRANSAÇÕES
        </Text>
        <Text onPress={() => navigateTo(RootRoutes.ABOUT)} style={styles.menu}>
          SOBRE
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrolledContainer}>
        <UserHistoryPointsChart />
        <PointsByProductChart />
        <PointsByProductPerUserChart />
      </ScrollView>
    </View>
  );
};
