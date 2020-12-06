import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Searchbar, Subheading, Title} from 'react-native-paper';
import {screenHeight, screenWidth} from '../common/utils';
import ChatList from '../components/ChatList';

const Chats = ({navigation}) => {
  const chats = [
    {
      id: '123',
      avatar: require('../assets/chat.png'),
      fullName: 'Gina',
      message: 'Eh! The house is part of the Residence',
    },
    {
      id: '321',
      avatar: require('../assets/chat.png'),
      fullName: 'Gigi',
      message: 'Eh! The house is part of the Residence',
    },
    {
      id: '122',
      avatar: require('../assets/chat.png'),
      fullName: 'Anna',
      message: 'Eh! The house is part of the Residence',
    },
    {
      id: '111',
      avatar: require('../assets/chat.png'),
      fullName: 'Danila',
      message: 'Eh! The house is part of the Residence',
    },
    {
      id: '231',
      avatar: require('../assets/chat.png'),
      fullName: 'Donald',
      message: 'Eh! The house is part of the Residence',
    },
    {
      id: '223',
      avatar: require('../assets/chat.png'),
      fullName: 'Tiffany',
      message: 'Eh! The house is part of the Residence',
    },

    {
      id: '113',
      avatar: require('../assets/chat.png'),
      fullName: 'Kristen',
      message: 'Eh! The house is part of the Residence',
    },
  ];

  return (
    <View style={styles.container}>
      <Title style={styles.headerText}>Chat Application</Title>
      <View style={styles.searchBar}>
        <Searchbar placeholder="Search" />
      </View>
      <FlatList
        data={chats}
        renderItem={({item}) => <ChatList {...item} navigation={navigation} />}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    height: screenHeight(100),
  },

  searchBar: {
    width: screenWidth(100),
  },
  headerText: {
    alignSelf: 'center',
    marginVertical: 12,
  },
});

export default Chats;
