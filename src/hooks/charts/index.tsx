import { useEffect, useState } from 'react';
import { Products, Transactions } from '../../database';
import moment from 'moment';

export type UserHistoryPointsGraph = { x: number, y: number }[];
export type PointsByProductGraph = {xAxisValues: string[], yAxisValues: {y: number}[] };

export function useCharts() {
    const [userHistoryPoints, setUserHistoryPoints] = useState<UserHistoryPointsGraph>([]);
    const [pointsByProduct, setPointsByProduct] = useState<PointsByProductGraph | null>(null);

    function createUserHistoryPointsChart(userId: number) {
      const chartData = Transactions.filter(transaction => transaction.usuario_id === userId).map(transaction => {
        return {
          x: moment(transaction.data.split(' ')[0].replace(/-/g, '/'), 'YYYY/MM/DD').unix('X'),
          y: transaction.pontos_movimentados,
        };
      });

      setUserHistoryPoints(chartData);
    }

    function createPointsByProductChart() {
        const productData = Products.map(product => {
          let points = 0;

          Transactions.reduce((acc, transaction) => {
            if (transaction.produto_id === product.id) {
              points = points + transaction.pontos_movimentados;
            }

            return acc;
          });

          return {label: product.nome, points};
        });

        setPointsByProduct({
            xAxisValues: productData.map(item => item.label),
            yAxisValues: productData.map(item => ({y: item.points})),
        });
    }

    useEffect(() => {
        createPointsByProductChart();
    }, []);

    return {userHistoryPoints, pointsByProduct, createUserHistoryPointsChart};
}
