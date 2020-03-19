import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5BA39",
    height: metrics.tabBarHeight,
    paddingHorizontal: metrics.padding,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: colors.lighter,
  },

  icon: {
    color: colors.darker,
  },

  active: {
    color: colors.primary,
  },

  main: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainIcon: {
    color: colors.white,
  },
});

export default styles;