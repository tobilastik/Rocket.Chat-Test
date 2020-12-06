import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Image,
  View,
  Switch,
  StatusBar,
} from 'react-native';
import {Title, Caption, TextInput, Subheading} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {appAction} from '../redux/actions';
import AsyncStorage from '@react-native-community/async-storage';
import Button from '../components/Button';
import {useTheme} from '@react-navigation/native';

const Welcome = ({navigation: {navigate}}) => {
  const dispatch = useDispatch();
  const {colors} = useTheme();

  const [showError, setShowError] = useState(false);
  const [name, setName] = useState('tobi');

  const {darkMode} = useSelector(({app}) => app);

  const toggleSwitch = () => {
    console.log(darkMode);
    dispatch(appAction.setDarkMode(!darkMode));
    AsyncStorage.setItem('darkMode', JSON.stringify(darkMode));
    console.log(darkMode);
  };

  const handleContinue = () => {
    if (name) {
      dispatch(appAction.setUserName(name));
      navigate('Chats');;
    } else {
      setShowError(true);
    }
  };

  return (
    <ScrollView>
      <StatusBar
        barStyle={darkMode ? 'light-content' : 'dark-content'}
        backgroundColor={colors.background}
      />
      <View style={styles.darkMode}>
        <Subheading>Dark Mode</Subheading>
        <Switch
          trackColor={{false: '#767577', true: 'white'}}
          thumbColor={darkMode ? 'red' : '#121212'}
          onValueChange={toggleSwitch}
          value={darkMode}
        />
      </View>

      <View style={styles.container}>
        <Image
          style={styles.welcomeImage}
          source={require('../assets/chat.png')}
        />
        <View style={styles.welcomeTexts}>
          <Title>Welcome to Rocket.Chat Test App</Title>
          <Caption>Enter your name below to get started</Caption>
        </View>
        <TextInput
          error={showError}
          placeholder="Name"
          style={styles.textInput}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        {showError && (
          <Caption style={{color: 'red'}}>Input your name to continue.</Caption>
        )}
        <Button
          title="Continue"
          onPress={handleContinue}
          rootStyle={styles.welcomeBtn}
        />
      </View>
    </ScrollView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  darkMode: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 12,
    justifyContent: 'center',
  },
  welcomeImage: {
    height: 200,
    width: 300,
    marginVertical: 50,
    alignSelf: 'center',
  },
  welcomeTexts: {
    alignItems: 'center',
    marginBottom: 12,
  },
  welcomeBtn: {
    marginTop: 12,
  },
});
