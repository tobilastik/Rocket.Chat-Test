import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BackButton from './BackButton';
import {Title} from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const AppHeader = ({title, goBack}) => (
  <View style={styles.container}>
    <BackButton goBack={goBack} />
    <Title style={styles.headerText}>{title}</Title>
    <MaterialIcon />
  </View>
);

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    alignSelf: 'center',
  },
});
