import React from 'react';
import { ScrollView, Text } from 'react-native';
import { styles } from './styles';

import { Products } from '../../database';

export const ProductsScreen = () => {
  return (
      <ScrollView contentContainerStyle={styles.container}>
        {Products.map((item) => <Text style={styles.item} key={item.id}>{item.nome}</Text>)}
      </ScrollView>
  );
};
