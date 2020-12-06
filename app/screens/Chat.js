import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Subheading} from 'react-native-paper';

const Chat = ({}) => {
  const {userName} = useSelector(({app}) => app);

  return (
    <View>
      <Subheading>Welcome, {userName}</Subheading>
    </View>
  );
};

export default Chat;
