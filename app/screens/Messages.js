import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../components/ChatHeader';
import Footer from '../components/Footer';
import {appAction} from '../redux/actions';
import ChatMessages from '../components/ChatMessages';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useEffect} from 'react';

const Chat = ({navigation: {goBack, navigate}, route}) => {
  const dispatch = useDispatch();
  const {userName, chatMessages, chatMessages2, chatMessages3} = useSelector(
    ({app}) => app,
  );
  const [message, setMessage] = useState('');
  const [tempMessages, setTempMessages] = useState(chatMessages);

  useEffect(() => {
    if (chatMessages.length < 2) {
      handleWelcomeMessage();
    }
  }, []);

  const {id, fullName} = route.params;

  console.log('id', id);
  //a welcome message from admin to user
  const handleWelcomeMessage = () => {
    let a = {
      id: 'admin',
      message: `Hello, welcome ${userName}! You can send all your messages here and I will keep them in my memory, even after leaving this page or minimizing or closing your app, you can still find your messages here. So far you do not format your app. 🙂`,
      timeStamp: Date.now(),
    };
    tempMessages.unshift(a);
    console.log('ok', tempMessages);
    dispatch(appAction.setChatMessages(tempMessages));
  };

  const send = async () => {
    let a = {
      id: (Math.random() * 10).toString(),
      message: message,
      timeStamp: Date.now(),
    };
    tempMessages.unshift(a);
    console.log('ok', tempMessages);
    dispatch(appAction.setChatMessages(tempMessages));
    setMessage('');
    console.log('mess', chatMessages);
  };

  const handleclear = () => {
    navigate('Information');
  };

  return (
    <>
      <Header
        fullName={fullName}
        goBack={goBack}
        name={userName}
        handleclear={handleclear}
      />
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          inverted={true}
          data={chatMessages}
          renderItem={({item}) => <ChatMessages {...item} />}
          keyExtractor={(item) => item.id}
        />
        <View style={{height: 80}} />
        <Footer
          send={send}
          message={message}
          onChangeText={(text) => setMessage(text)}
        />
      </SafeAreaView>
    </>
  );
};

export default Chat;
