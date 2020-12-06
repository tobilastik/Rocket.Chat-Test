import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {screenWidth} from '../common/utils';
import {useTheme} from '@react-navigation/native';

const Footer = ({message, onChangeText, send}) => {
  const {colors} = useTheme();

  const showAdd = () => {};

  return (
    <View style={styles.inputRoot}>
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={showAdd}>
          <AntDesign name="pluscircle" size={30} color={colors.primary} />
        </TouchableOpacity>
        <TextInput
          multiline={true}
          placeholder="Type a message"
          style={{
            ...styles.inputField,
            borderColor: colors.text,
            color: colors.text,
          }}
          onChangeText={onChangeText}
          value={message}
        />
        <TouchableOpacity disabled={!message ? true : false} onPress={send}>
          <MaterialIcons
            name="send"
            size={24}
            color={message ? colors.primary : '#F5AEB8'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Footer;

const styles = StyleSheet.create({
  inputRoot: {
    position: 'absolute',
    bottom: 2,
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 6,
    alignItems: 'center',
    width: screenWidth(100),
    borderTopColor: 'gray',
    borderTopWidth: 1,
    padding: 5,
  },
  inputField: {
    width: screenWidth(80),
    borderRadius: 16,
    marginHorizontal: 10,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    paddingTop: 18,
    borderWidth: 1,
  },
});
