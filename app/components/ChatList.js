import React from 'react';
import {TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import {Subheading, Caption} from 'react-native-paper';
import {screenWidth} from '../common/utils';

const ChatList = ({fullName, message, avatar, id, navigation}) => (
  <View>
    <View style={styles.messageContainer}>
      <TouchableOpacity>
        <Image style={styles.avatarStyle} source={avatar} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Messages', {
            id: id,
            avatar: avatar,
          })
        }
        style={styles.messagesStyle}>
        <View style={{width: screenWidth(70)}}>
          <Subheading>{fullName}</Subheading>
          <Caption style={[styles.messagesTxt]}>{message}</Caption>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

export default ChatList;

const styles = StyleSheet.create({
  avatarStyle: {
    height: 44,
    width: 44,
    borderRadius: 24,
  },
  messageName: {
    fontSize: 27,
  },
  messagesStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  },
  messagesTxt: {
    fontSize: 12,
    color: 'gray',
  },
  messageRequest: {
    fontSize: 23,
  },
  unreadStyle: {
    position: 'absolute',
    right: 3,
    height: 30,
    width: 30,
    paddingVertical: 4,

    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  bigunreadStyle: {
    position: 'absolute',
    right: 3,
    height: 40,
    width: 40,
    paddingVertical: 4,

    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unreadMsgs: {
    color: 'white',
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.3,
  },
});
