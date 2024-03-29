import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Title, Caption} from 'react-native-paper';
import BackButton from './BackButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from '@react-navigation/native';

const ChatHeader = ({goBack, handleInfo, fullName}) => {
  const {colors} = useTheme();

  return (
    <View>
      <View style={styles.rootStyle}>
        <BackButton goBack={goBack} />
        <View style={{marginLeft: 12}}>
          <Title style={styles.chatName}>{fullName}</Title>
          <Caption>Hi there! I'm using Rocket.Chat!</Caption>
        </View>
        <View style={styles.iconsView}>
          <TouchableOpacity onPress={handleInfo}>
            <MaterialIcons
              name="info-outline"
              size={30}
              color={colors.primary}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  rootStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  iconsView: {
    flexDirection: 'row',
    position: 'absolute',
    right: 4,

    justifyContent: 'space-between',
  },
  chatName: {
    textTransform: 'capitalize',
    marginBottom: -6,
  },
});
