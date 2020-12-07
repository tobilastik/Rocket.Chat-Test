import React, {useRef, useEffect} from 'react';
import {Animated, Text, View} from 'react-native';

const MessageView = ({children, rootStyle}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      useNativeDriver: true,
      toValue: 100,
      duration: 10000,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={[rootStyle, {opacity: fadeAnim}]}>
      {children}
    </Animated.View>
  );
};

export default MessageView;
