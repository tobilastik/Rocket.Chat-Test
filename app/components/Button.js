import * as React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Subheading, ActivityIndicator} from 'react-native-paper';


const Button = ({
  title,
  labelStyle,
  rootStyle,
  onPress,
  loading,
  loadingColor,
  disabled,
}) => {
  return (
    <TouchableOpacity
      disabled={loading || disabled}
      onPress={onPress}
      style={[styles.root, rootStyle]}>
      {loading && (
        <View style={styles.preloader}>
          <ActivityIndicator
            size="small"
            animating={true}
            color={loadingColor}
          />
        </View>
      )}
      <Subheading style={[styles.label, labelStyle]}>{title}</Subheading>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  loadingColor: 'white',
  loading: false,
  disabled: false,
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