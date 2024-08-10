import React from 'react';
import { View, Text } from 'react-native';
import { stylePractice } from '../styles/styles';

interface AppFooterProps {
  footerText: string;
  footerMessage?: string; // Optional if not used
}

const AppFooter: React.FC<AppFooterProps> = ({ footerText }) => {
  return (
    <View style={stylePractice.footer}>
      <Text style={stylePractice.footerText}>{footerText}</Text>
    </View>
  );
};

export default AppFooter;
