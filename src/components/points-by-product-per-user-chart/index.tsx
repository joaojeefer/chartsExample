import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { BarChart } from 'react-native-charts-wrapper';
import { Products, Transactions, Users } from '../../database';
import { styles } from './styles';
import { generateNamedColors } from '../../utils';

export const PointsByProductPerUserChart: React.FC = () => {
    const [dataSets, setDataSets] = React.useState<any[]>([]);

    useEffect(() => {
        const colors = generateNamedColors(Products.length);

        const dataSetsList = Products.map((product, index) => {
            const pointsByUser = Users.map(user => {
                let points = 0;

                Transactions.forEach(transaction => {
                    if (transaction.produto_id === product.id && transaction.usuario_id === user.id) {
                        points = points + transaction.pontos_movimentados;
                    }
                });

                return points;
            });

            return {
                label: product.nome,
                values: pointsByUser.map((points, i) => ({y: points, x: i})),
                config: {
                    drawValues: true,
                    colors: [colors[index]],
                },
            };
        });

        setDataSets(dataSetsList);
    }, []);


    if (!dataSets.length) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pontos x produto x usuário</Text>
            <BarChart style={styles.chart}
                data={{
                    dataSets,
                    config: {
                        barWidth: 0.2,
                        group: {
                        fromX: 0,
                        groupSpace: 0.1,
                        barSpace: 0.1,
                        },
                    },
                }}
                chartDescription={{
                text: '',
                }}
                xAxis={{
                    valueFormatter: Users.map(user => user.nome),
                    position: 'BOTTOM',
                    axisLineWidth: 0,
                    drawGridLines: true,
                    granularityEnabled: true,
                    drawLabels: true,
                    axisMaximum: 3,
                    axisMinimum: 0,
                    centerAxisLabels: true,
                }}
            />
        </View>
   );
};
