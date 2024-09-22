import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Engenharia de Software</Text>
      <Text style={styles.subtitleText}>Engenharia de Software para Web</Text>
      <View style={styles.spacing} />
      <Text style={styles.subtitleText}>Grupo 5</Text>
      <Text style={styles.text}>Caina dos Santos Mota</Text>
      <Text style={styles.text}>Diego Francio</Text>
      <Text style={styles.text}>João Jeefer da Silva Félix</Text>
      <Text style={styles.text}>Renata Barros da Silva</Text>
    </View>
  );
};
