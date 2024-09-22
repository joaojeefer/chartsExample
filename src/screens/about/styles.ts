import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../res';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: metrics.font_size.medium,
    fontWeight: 'bold',
    color: colors.secondary.dark,
  },
  subtitleText: {
    fontSize: metrics.font_size.x_small,
    fontWeight: 'bold',
    color: colors.secondary.dark,
  },
  text: {
    color: colors.secondary.dark,
  },
  spacing: {
    marginBottom: metrics.spacing.small,
  },
});
