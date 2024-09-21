import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {AboutNavigationProp, RootRoutes} from '../../routes/types';

import {HorizontalBarChart, LineChart} from 'react-native-charts-wrapper';
import {Table, TableWrapper, Col} from 'react-native-table-component';

import {Products, Transactions, Users} from '../../database';

export const HomeScreen = () => {
  const navigation = useNavigation<AboutNavigationProp>();

  function navigateTo(
    screen: RootRoutes.ABOUT | RootRoutes.PRODUCTS | RootRoutes.USERS,
  ) {
    navigation.navigate(screen);
  }

  return (
    <View style={styles.container}>
      <Text onPress={() => navigateTo(RootRoutes.ABOUT)} style={styles.menu}>
        Sobre
      </Text>
      <Text onPress={() => navigateTo(RootRoutes.PRODUCTS)} style={styles.menu}>
        Produtos
      </Text>
      <Text onPress={() => navigateTo(RootRoutes.USERS)} style={styles.menu}>
        Usuários
      </Text>

      <View>
        <ScrollView>
          <LineChart
            style={styles.chart}
            data={{
              dataSets: [{values: [{y: 1}, {y: 2}, {y: 1}]}],
            }}
          />
          <HorizontalBarChart
            style={styles.chart}
            data={{
              dataSets: [{values: [{y: 1}, {y: 2}, {y: 1}]}],
            }}
          />

          <Table
            borderStyle={{borderWidth: 3, borderColor: '#fff'}}
            style={styles.table}>
            <TableWrapper style={{flexDirection: 'row'}}>
              <Col data={['teste']} textStyle={styles.titleTable} />
              <Col data={['teste teste']} textStyle={styles.textTable} />
            </TableWrapper>
            <TableWrapper style={{flexDirection: 'row'}}>
              <Col data={['teste']} textStyle={styles.titleTable} />
              <Col data={['teste teste']} textStyle={styles.textTable} />
            </TableWrapper>
            <TableWrapper style={{flexDirection: 'row'}}>
              <Col data={['teste']} textStyle={styles.titleTable} />
              <Col data={['teste teste']} textStyle={styles.textTable} />
            </TableWrapper>
          </Table>

          {Products.map(item => {
            return (
              <View
                style={{
                  flex: 1,
                  borderBottomColor: 'red',
                  borderBottomWidth: 2,
                  marginHorizontal: 12,
                  justifyContent: 'center',
                }}
                key={item.id}>
                <Text
                  numberOfLines={1}
                  style={{fontSize: 24, fontWeight: '400'}}>
                  {item.nome}
                </Text>
              </View>
            );
          })}

          {Transactions.map(item => {
            return (
              <View
                style={{
                  flex: 1,
                  borderBottomColor: 'blue',
                  borderBottomWidth: 2,
                  marginHorizontal: 12,
                  justifyContent: 'center',
                }}
                key={item.id}>
                <Text
                  numberOfLines={1}
                  style={{fontSize: 24, fontWeight: '400'}}>
                  {item.data}
                </Text>
              </View>
            );
          })}

          {Users.map(item => {
            return (
              <View
                style={{
                  flex: 1,
                  borderBottomColor: 'yellow',
                  borderBottomWidth: 2,
                  marginHorizontal: 12,
                  justifyContent: 'center',
                }}
                key={item.id}>
                <Text
                  numberOfLines={1}
                  style={{fontSize: 24, fontWeight: '400'}}>
                  {item.nome}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};
