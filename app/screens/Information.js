import React from 'react';
import {StyleSheet, Switch, TouchableOpacity, View, Image} from 'react-native';
import {Subheading, Card, Title, Headline, Caption} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {appAction} from '../redux/actions';
import AsyncStorage from '@react-native-community/async-storage';
import AppHeader from '../components/AppHeader';

const Information = ({navigation: {goBack}}) => {
  const dispatch = useDispatch();

  const toggleSwitch = () => {
    console.log(darkMode);
    dispatch(appAction.setDarkMode(!darkMode));
    AsyncStorage.setItem('darkMode', JSON.stringify(darkMode));
    console.log(darkMode);
  };

  const {darkMode, userName} = useSelector(({app}) => app);

  const handleDelete = () => {
    dispatch(appAction.setChatMessages([]));
    goBack();
  };

  return (
    <View>
      <AppHeader goBack={goBack} title="Converstaion Info" />
      <View style={styles.profileDetails}>
        <Image
          style={styles.profileImage}
          source={require('../assets/chat.png')}
        />
        <Headline style={{textTransform: 'capitalize'}}>{userName}</Headline>
        <Caption>Hi there! I'm using Rocket.Chat!</Caption>
      </View>
      <Card style={styles.cardView}>
        <View style={styles.darkMode}>
          <Subheading>Dark Mode</Subheading>
          <Switch
            trackColor={{false: '#767577', true: 'white'}}
            thumbColor={darkMode ? 'red' : '#121212'}
            onValueChange={toggleSwitch}
            value={darkMode}
          />
        </View>
      </Card>

      <Card style={styles.cardView}>
        <TouchableOpacity onPress={handleDelete} style={{padding: 12}}>
          <Subheading style={styles.deleteConversation}>
            Delete Conversation
          </Subheading>
        </TouchableOpacity>
      </Card>
    </View>
  );
};

export default Information;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  title: {
    alignItems: 'center',
    flex: 1,
  },
  darkMode: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
  },
  cardView: {
    marginTop: 20,
    elevation: 6,
  },
  profileDetails: {
    alignItems: 'center',
    marginVertical: 20,
  },
  deleteConversation: {
    color: 'red',
    alignSelf: 'center',
  },
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
});
