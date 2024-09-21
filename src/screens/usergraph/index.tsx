import React, { useState } from 'react';
import { ScrollView, Text, View, processColor } from 'react-native';
import { styles } from './styles';
import { LineChart } from 'react-native-charts-wrapper';
import moment from 'moment';
import DropDownPicker from 'react-native-dropdown-picker';

import { Users } from '../../database/users';
import { Transactions } from '../../database/transactions';

import { useRoute } from '@react-navigation/native';
import { UserGraphRouteProp } from '../../routes/types';

export const UserGraphScreen = () => {
  const route = useRoute<UserGraphRouteProp>();
  const { userId } = route.params;

  var UsersData = [];
  for (var i = 0; i < Users.length; i++) {
    if (Users[i].tipo === "cliente") {
      var obj = { label: Users[i].nome, value: Users[i].id };
      UsersData.push(obj);
    }
  }

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(userId);
  // const [items, setItems] = useState([
  //   { label: 'Apple', value: 'apple' },
  //   { label: 'Banana', value: 'banana' },
  //   { label: 'Pear', value: 'pear' },
  // ]);
  const [items, setItems] = useState(UsersData);



  var measuresData = [];

  var userName = Users.find(item => item.id === userId)?.nome;
  console.log(userName);

  drawGraph(value);
  // for (var i = 0; i < Transactions.length; i++) {
  //   if (Transactions[i].usuario_id === userId) {
  //     //console.log(Transactions[i].pontos_movimentados);
  //     //console.log(Transactions[i].data);
  //     //console.log(moment(Transactions[i].data.split(' ')[0].replace(/-/g, '/'), 'YYYY/MM/DD').unix('X'));
  //     //console.log("-----------------");
  //     var obj = { y: Transactions[i].pontos_movimentados, x: moment(Transactions[i].data.split(' ')[0].replace(/-/g, '/'), 'YYYY/MM/DD').unix('X') };
  //     measuresData.push(obj);
  //   }
  // }
  // console.log(measuresData);

  function drawGraph(userId) {
    for (var i = 0; i < Transactions.length; i++) {
      if (Transactions[i].usuario_id === userId) {
        //console.log(Transactions[i].pontos_movimentados);
        //console.log(Transactions[i].data);
        //console.log(moment(Transactions[i].data.split(' ')[0].replace(/-/g, '/'), 'YYYY/MM/DD').unix('X'));
        //console.log("-----------------");
        var obj = { y: Transactions[i].pontos_movimentados, x: moment(Transactions[i].data.split(' ')[0].replace(/-/g, '/'), 'YYYY/MM/DD').unix('X') };
        measuresData.push(obj);
      }
    }
    console.log(measuresData);

  }


  return (

    < View >
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder={'Escolha um cliente'}
      />
      <View style={{
        //flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text>Chosen fruit: {value === null ? 'none' : value}</Text>
      </View>

      <ScrollView>
        <LineChart style={styles.chart}
          data={{
            dataSets: [{
              values: measuresData,
              label: `Pontuação de ${userName}`,
              config: {
                color: processColor('red'),
                lineWidth: 2,
                valueTextSize: 9,
                valueTextColor: processColor('red'),
              },
            }],
          }}
          chartDescription={{
            text: '',
          }}
          xAxis={{
            position: 'BOTTOM',
            axisLineWidth: 0,
            drawGridLines: true,
            granularityEnabled: true,
            granularity: 1,
            drawLabels: true,
            valueFormatter: 'date',
            valueFormatterPattern: 'dd-MM-yy',
            //since: 0,
            timeUnit: 'SECONDS',
            gridDashedLine: {
              lineLength: 8,
              spaceLength: 10,
            }

          }}
        />

      </ScrollView>
    </View >
  );
};
