import * as React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Subheading, ActivityIndicator} from 'react-native-paper';

const Button = ({
  title,
  labelStyle,
  rootStyle,
  onPress,
  onPressIn,
  onPressOut,
  testID,
}) => {
  return (
    <TouchableOpacity
      testID={testID}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
      style={[styles.root, rootStyle]}>
      <Subheading style={[styles.label, labelStyle]}>{title}</Subheading>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 55,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    flexDirection: 'row',
  },
  label: {
    fontSize: 18,
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '600',
  },
  preloader: {
    marginHorizontal: 5,
  },
});
