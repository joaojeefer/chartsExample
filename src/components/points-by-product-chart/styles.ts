import { StyleSheet } from 'react-native';
import { metrics } from '../../res';

export const styles = StyleSheet.create({
    container: {
        marginBottom: metrics.spacing.medium,
    },
    title: {
        fontSize: metrics.font_size.small,
        fontWeight: 'bold',
        marginBottom: metrics.spacing.x_small,
    },
    chart: {
        flex: 1,
        height: 200,
    },
});
