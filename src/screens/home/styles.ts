import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../res';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: metrics.spacing.small,
    paddingHorizontal: metrics.spacing.small,
  },
  menu: {
    fontSize: metrics.font_size.small,
    fontWeight: 'bold',
    textAlign: 'right',
    color: colors.secondary.dark,
    marginBottom: metrics.spacing.xx_small,
  },
  chart: {
    flex: 1,
    // backgroundColor: '#fff',
    height: 200,
    //width: '90%',
  },

  table: {
    backgroundColor: '#ECECEC',
    borderRadius: 15,
  },
  titleTable: {
    textAlign: 'right',
    color: '#9C9B9B',
  },
  textTable: {
    textAlign: 'center',
    color: '#9C9B9B',
  },
});
