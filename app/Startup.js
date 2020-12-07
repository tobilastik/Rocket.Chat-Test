import 'react-native-gesture-handler';
import * as React from 'react';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import Navigation from './navigation';
import {
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {appAction} from './redux/actions';

const StartUp = ({navigation}) => {
  const darkMode = useSelector(({app: {darkMode}}) => darkMode);
  const dispatch = useDispatch();

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: 'whitesmoke',
      text: 'black',
      primary: '#F4445C',
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#121212',
      text: 'white',
      primary: '#F4445C',
    },
  };

  const theme = darkMode ? CustomDarkTheme : CustomDefaultTheme;

  React.useEffect(() => {
    loadAppMode();
  }, []);

  const loadAppMode = async () => {
    const darkModeStatus = await AsyncStorage.getItem('darkMode');
    if (darkModeStatus == null) {
      return;
    } else if (darkModeStatus == 'true') {
      dispatch(appAction.setDarkMode(false));
    } else if (darkModeStatus == 'false') {
      dispatch(appAction.setDarkMode(true));
    }
  };

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Navigation />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default StartUp;
