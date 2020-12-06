import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Subheading, Caption} from 'react-native-paper';
import {screenWidth} from '../common/utils';
import moment from 'moment';

const ChatMessages = ({id, timeStamp, message}) => {
  const {colors} = useTheme();

  const filter = (myDate) => {
    return moment(myDate).calendar(null, {
      lastWeek: 'dddd, LT',
      lastDay: '[Yesterday] LT',
      sameDay: ' LT',
      sameElse: 'DD/MM/YYYY, LT',
    });
  };

  return (
    <>
      {id == 'admin' ? (
        <View>
          {message && (
            <View
              style={{
                ...styles.receiverView,
                backgroundColor: colors.secondary,
              }}>
              <Subheading style={{color: 'white'}}>{message}</Subheading>
              <Caption style={styles.timeStamp}>{filter(timeStamp)}</Caption>
            </View>
          )}
        </View>
      ) : (
        <View>
          {message && (
            <View
              style={{...styles.senderView, backgroundColor: colors.primary}}>
              <Subheading style={{color: 'white'}}>{message}</Subheading>
              <Caption style={styles.timeStamp}>{filter(timeStamp)}</Caption>
            </View>
          )}
        </View>
      )}
    </>
  );
};

export default ChatMessages;

const styles = StyleSheet.create({
  receiverView: {
    marginVertical: 6,
    padding: 12,
    marginRight: screenWidth(30),
    marginLeft: screenWidth(3),
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  senderView: {
    marginVertical: 6,
    padding: 12,
    marginLeft: screenWidth(30),
    marginRight: screenWidth(3),
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  timeStamp: {
    position: 'absolute',
    right: 4,
    bottom: 1,
  },
});
