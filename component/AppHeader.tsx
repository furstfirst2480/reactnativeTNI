import React from "react";
import { View, Text } from "react-native";
import { stylePractice } from "../styles/styles";

interface AppHeaderProps {
  title: string;
  subtitle: string;
}

const AppHeader: React.FC<AppHeaderProps> = ({ title, subtitle }) => {
  return (
    <View style={stylePractice.header}>
      <Text style={stylePractice.subtitleText}>{subtitle}</Text>
      <Text style={stylePractice.headerText}>{title}</Text>
      
    </View>
  );
};

export default AppHeader;
