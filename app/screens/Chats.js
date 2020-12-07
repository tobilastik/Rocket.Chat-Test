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
import AppHeader from '../components/AppHeader';
import ChatList from '../components/ChatList';

const chats = [
  {
    id: '123',
    avatar: require('../assets/chat.png'),
    fullName: 'Gina',
    message: 'Hello, Good Morning!',
  },
  {
    id: '321',
    avatar: require('../assets/chat.png'),
    fullName: 'Chris',
    message: 'Eh! The house is part of the Residence',
  },
  {
    id: '132',
    avatar: require('../assets/chat.png'),
    fullName: 'Anna',
    message: 'This is a dummy data by the way.',
  },
];

const Chats = ({navigation: {goBack, navigate}}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [listOfFilteredChats, setListOfFilteredChats] = useState('');

  const onChangeSearch = (query) => {
    let filteredData = chats.filter((item) => {
      const itemData = item.fullName
        ? item.fullName.toUpperCase()
        : ''.toUpperCase();
      const textData = query.toUpperCase();
      return itemData.includes(textData);
    });
    setListOfFilteredChats(filteredData);
    setSearchQuery(query);
  };

  return (
    <View style={styles.container}>
      <AppHeader goBack={goBack} title="Chat Application" />
      <View style={styles.searchBar}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <FlatList
        data={
          listOfFilteredChats && listOfFilteredChats.length > 0
            ? listOfFilteredChats
            : chats
        }
        renderItem={({item}) => <ChatList {...item} navigate={navigate} />}
        keyExtractor={(item) => item.fullName}
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
