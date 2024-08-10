import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import ProfileScreen from "./component/ProfileScreen";
import { stylesLogin } from "./styles/styles";

export default function App(): React.JSX.Element {
  return (
    <View>
      <ProfileScreen />
    </View>
  );
}
