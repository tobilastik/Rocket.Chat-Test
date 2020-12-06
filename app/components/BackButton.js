import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '@react-navigation/native';

const BackButton = ({rootStyle, goBack, colorStyle}) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity style={[styles.root, rootStyle]} onPress={() => goBack()}>
      <Icon
        name="chevron-left"
        size={35}
        color={colors.primary}
        style={colorStyle}
      />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  root: {},
  img: {
    height: 15,
    width: 9,
  },
});
