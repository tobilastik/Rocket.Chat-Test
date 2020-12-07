import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Image,
  View,
  Switch,
  StatusBar,
  Animated,
} from 'react-native';
import {Title, Caption, TextInput, Subheading} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {appAction} from '../redux/actions';
import Button from '../components/Button';
import {useTheme} from '@react-navigation/native';

const Welcome = ({navigation}) => {
  const dispatch = useDispatch();
  const {colors} = useTheme();
  const [showError, setShowError] = useState(false);
  const [name, setName] = useState('');

  const {darkMode} = useSelector(({app}) => app);
  const animation = new Animated.Value(0);
  const inputRange = [0, 1];
  const outputRange = [1, 0.8];
  const scale = animation.interpolate({inputRange, outputRange});

  const onPressIn = () => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(animation, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
    if (name) {
      dispatch(appAction.setUserName(name));
      navigation.navigate('Chats');
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
          placeholder="username"
          style={styles.textInput}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        {showError && (
          <Caption style={{color: 'red'}}>Input your name to continue.</Caption>
        )}
        <Animated.View style={[styles.button, {transform: [{scale}]}]}>
          <Button
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            title="Continue"
            rootStyle={styles.welcomeBtn}
          />
        </Animated.View>
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
