import React from 'react';
import { View, Text, Button } from 'react-native';
import { stylePractice } from '../styles/styles';

interface ContentProps {
  message: string;
  onButtonClick: () => void;
}

const Login = ({ message, onButtonClick }: ContentProps): React.JSX.Element => {
  return (
    <View style={stylePractice.content}>
      <Text style={stylePractice.text}>{message}</Text>
      <Button title="Click Me" onPress={onButtonClick} />
    </View>
  );
};

export default Login;
