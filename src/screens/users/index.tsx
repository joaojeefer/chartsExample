import React from 'react';
import { ScrollView, Text } from 'react-native';
import { styles } from './styles';

import { Users } from '../../database/users';

export const UsersScreen = () => {
  return (
      <ScrollView contentContainerStyle={styles.container}>
        {Users.map((item) => <Text style={styles.item} key={item.id}>{item.nome}</Text>)}
      </ScrollView>
  );
};
