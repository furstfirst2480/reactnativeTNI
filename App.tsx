import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import ProfileScreen from "./component/ProfileScreen";
import { stylesLogin } from "./styles/styles";
import FlatListExample from "./component/FlatListExample";
import FlatListCallBackend from "./component/FlatListCallBackend";
import NewsApp from "./component/NewsApp";
export default function App(): React.JSX.Element {
  return (
    <View>
      {/* <ProfileScreen /> */}
      {/* <FlatListExample/> */}
      {/* <FlatListCallBackend/> */}
      <NewsApp/>
    </View>
  );
}
