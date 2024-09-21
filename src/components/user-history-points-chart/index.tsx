import React, { useEffect, useState } from 'react';
import { processColor, Text, View } from 'react-native';
import { LineChart } from 'react-native-charts-wrapper';
import DropDownPicker from 'react-native-dropdown-picker';
import { styles } from './styles';
import { Users } from '../../database';
import { DropDownItem } from './types';
import { useCharts } from '../../hooks';
import { colors, metrics } from '../../res';

export const UserHistoryPointsChart: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(0);
    const [dropDownItems, setDropDownItems] = useState<DropDownItem[]>([]);

    const {createUserHistoryPointsChart, userHistoryPoints} = useCharts();

    useEffect(() => {
        Users.filter(user => user.tipo === 'cliente').map(user => {
        setDropDownItems(oldItems => [...oldItems, { label: user.nome, value: user.id }]);
        });
    }, []);

    useEffect(() => {
        createUserHistoryPointsChart(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    function formatChartLabel() {
        return `Pontuação de ${Users.find(item => item.id === value)?.nome}`;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Movimentação da carteira</Text>
            <DropDownPicker
                open={open}
                value={value}
                items={dropDownItems}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setDropDownItems}
                placeholder={'Escolha um usuário'}
            />
            <LineChart style={styles.chart}
                data={{
                    dataSets: [{
                        values: userHistoryPoints,
                        label: formatChartLabel(),
                        config: {
                            color: processColor(colors.danger.default),
                            lineWidth: 2,
                            valueTextSize: metrics.font_size.xxx_small,
                            valueTextColor: processColor(colors.danger.default),
                        },
                    }],
                }}
                chartDescription={{ text: ''}}
                xAxis={{
                    position: 'BOTTOM',
                    axisLineWidth: 0,
                    drawGridLines: true,
                    granularityEnabled: true,
                    granularity: 1,
                    drawLabels: true,
                    valueFormatter: 'date',
                    valueFormatterPattern: 'dd-MM-yy',
                    timeUnit: 'SECONDS',
                    gridDashedLine: {
                        lineLength: 8,
                        spaceLength: 10,
                    },
                }}
            />
        </View>
    );
};
