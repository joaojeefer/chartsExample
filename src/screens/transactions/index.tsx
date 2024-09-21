import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Col, Row, Table, TableWrapper } from 'react-native-table-component';
import { styles } from './styles';
import { Products, Transactions, Users } from '../../database';
import { TableItem } from './types';

export const TransactionsScreen = () => {
    const [tableItems, setTableItems] = useState<TableItem[]>([]);

    function mountTable() {
        const tableData = Transactions.map((transaction) => ({
              date: transaction.data,
              user: Users.find((user) => user.id === transaction.usuario_id)?.nome,
              points: transaction.pontos_movimentados,
              product: Products.find((product) => product.id === transaction.produto_id)?.nome,
              transaction: transaction.tipo,
              company: Users.find((user) => user.id === transaction.empresa_id)?.nome,
            })
        );

        setTableItems(tableData);
    }

    useEffect(() => {
        mountTable();
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ScrollView horizontal={true}>
                <View>
                    <Table>
                        <Row
                            data={['DATA', 'USUÁRIO', 'PONTOS', 'PRODUTO', 'TRANSAÇÃO', 'EMPRESA']}
                            style={styles.tableHeader}
                            textStyle={styles.tableTitleText}
                        />
                    </Table>

                    <ScrollView>
                        <Table borderStyle={styles.tableBodyWireframe}>
                            {tableItems.map((item) => {
                                const key = `${item.date}-${item.user}-${item.points}-${item.product}-${item.transaction}-${item.company}`;
                                return (
                                    <TableWrapper key={key} style={styles.tableWrapper}>
                                        <Col data={[item.date]} textStyle={styles.tableBodyText} />
                                        <Col data={[item.user]} textStyle={styles.tableBodyText} />
                                        <Col data={[item.points]} textStyle={styles.tableBodyText} />
                                        <Col data={[item.product]} textStyle={styles.tableBodyText} />
                                        <Col data={[item.transaction]} textStyle={styles.tableBodyText} />
                                        <Col data={[item.company]} textStyle={styles.tableBodyText} />
                                    </TableWrapper>
                                );
                            })}
                        </Table>
                    </ScrollView>
                </View>
            </ScrollView>
        </ScrollView>
    );
};

