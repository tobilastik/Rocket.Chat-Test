import {useTheme} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Subheading, Caption} from 'react-native-paper';
import {screenWidth} from '../common/utils';
import moment from 'moment';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MessageView from './MessageView';

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
              <Subheading style={styles.messageText}>{message}</Subheading>
              <Caption style={styles.timeStamp}>{filter(timeStamp)}</Caption>
            </View>
          )}
        </View>
      ) : (
        <View>
          {message && (
            <MessageView
              rootStyle={{
                ...styles.senderView,
                backgroundColor: colors.primary,
              }}>
              <TouchableWithoutFeedback>
                <Animated.View>
                  <MaterialIcons
                    name="keyboard-arrow-down"
                    size={20}
                    color="white"
                    style={styles.icon}
                  />
                </Animated.View>
              </TouchableWithoutFeedback>
              <Subheading style={{color: 'white'}}>{message}</Subheading>
              <Caption style={styles.timeStamp}>{filter(timeStamp)}</Caption>
            </MessageView>
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
  icon: {
    alignSelf: 'flex-end',
    marginTop: -4,
  },
  messageText: {
    color: 'white',
    marginBottom: 12,
  },
});
