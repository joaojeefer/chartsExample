import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../res';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: metrics.spacing.small,
    paddingHorizontal: metrics.spacing.small,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: metrics.spacing.small,
  },
  menu: {
    fontSize: metrics.font_size.x_small,
    fontWeight: 'bold',
    color: colors.secondary.dark,
    marginBottom: metrics.spacing.xx_small,
  },
  scrolledContainer: {
    flexGrow: 1,
  },
});
