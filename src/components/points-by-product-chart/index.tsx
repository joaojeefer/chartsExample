import React from 'react';
import { processColor, Text, View } from 'react-native';
import { HorizontalBarChart } from 'react-native-charts-wrapper';
import { useCharts } from '../../hooks';
import { styles } from './styles';

export const PointsByProductChart: React.FC = () => {
  const {pointsByProduct} = useCharts();

  if (!pointsByProduct) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quantidade de pontos por produto</Text>
      <HorizontalBarChart
        style={styles.chart}
        data={{
          dataSets: [{
            values: pointsByProduct.yAxisValues,
            label: 'Produtos',
            config: {
              colors: [processColor('red'), processColor('blue'), processColor('green')],
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

