import { useEffect, useState } from 'react';
import { Products, Transactions } from '../../database';

export type PointsByProductGraph = {xAxisValues: string[], yAxisValues: {y: number}[] };

export function useCharts() {
    const [pointsByProduct, setPointsByProduct] = useState<PointsByProductGraph | null>(null);

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

    return {pointsByProduct};
}
