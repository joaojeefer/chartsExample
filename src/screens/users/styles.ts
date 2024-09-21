import { StyleSheet } from 'react-native';
import { metrics } from '../../res';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: metrics.spacing.small,
    paddingHorizontal: metrics.spacing.small,
  },
  item: {
    fontSize: metrics.font_size.small,
    fontWeight: '600',
    marginBottom: metrics.spacing.xxx_small,
  },
});
