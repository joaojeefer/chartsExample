import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../res';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: metrics.spacing.small,
        paddingHorizontal: metrics.spacing.small,
    },
    tableHeader: {
        height: metrics.spacing.large,
        backgroundColor: colors.secondary.darker,
    },
    tableTitleText: {
        width: 100,
        textAlign: 'center',
        color: colors.secondary.lightest,
    },
    tableBodyWireframe: {
        borderWidth: metrics.border.small,
        borderColor: colors.secondary.darker,
    },
    tableWrapper: { flexDirection: 'row' },
    tableBodyText: {
        width: 100,
        textAlign: 'center',
    },
});
