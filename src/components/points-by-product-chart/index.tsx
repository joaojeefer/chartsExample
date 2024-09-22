import React from 'react';
import { Text, View } from 'react-native';
import { HorizontalBarChart } from 'react-native-charts-wrapper';
import { useCharts } from '../../hooks';
import { styles } from './styles';
import { generateNamedColors } from '../../utils';
import { Products } from '../../database';

export const PointsByProductChart: React.FC = () => {
  const {pointsByProduct} = useCharts();

  if (!pointsByProduct) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pontos x produto</Text>
      <HorizontalBarChart
        style={styles.chart}
        data={{
          dataSets: [{
            values: pointsByProduct.yAxisValues,
            label: 'Produtos',
            config: {
              colors: generateNamedColors(Products.length).reverse(),
            },
            }],

        }}
        xAxis={{
          valueFormatter: pointsByProduct.xAxisValues,
          position: 'BOTTOM',
          granularityEnabled: true,
          drawGridLines: false,
          drawAxisLine: false,
        }}
        yAxis={{left:{axisMinimum: 0, drawGridLines: false, drawAxisLine: false}, right: {drawAxisLine: false}}}
      />
    </View>
  );
};

