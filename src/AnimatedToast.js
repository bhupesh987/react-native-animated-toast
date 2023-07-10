import {Animated, Image, Text} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Easing} from 'react-native-reanimated';

import {images} from './images';
import {useToastProvider} from './ToastContext';
import styles from './styles';

const AnimatedToast = () => {
  const animated = useRef(new Animated.Value(0)).current;
  const [toastMessage, setMessage] = useState('');
  const [toastType, setType] = useState('success');

  const {toastVisible, showToast} = useToastProvider();

  useEffect(() => {
    !!toastVisible && popupToast(toastVisible, 'success');
  }, [toastVisible]);

  const popupToast = (message = '', type = '', duration = 2000) => {
    try {
      type && setType(type);
      message && setMessage(message);
    } catch (error) {}

    Animated.timing(animated, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.bounce,
    }).start();

    setTimeout(() => {
      Animated.timing(animated, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
        easing: Easing.ease,
      }).start(() => showToast(null));
    }, duration);
  };

  return (
    <Animated.View style={styles.container(animated)}>
      <Image
        resizeMode={'contain'}
        source={toastType == 'success' ? images.check : images.close}
        style={styles.icon}
      />
      <Text style={styles.messageText}>{toastMessage}</Text>
    </Animated.View>
  );
};

export default AnimatedToast;
