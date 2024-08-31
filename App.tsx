import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import ProfileScreen from "./component/ProfileScreen";
import { stylesLogin } from "./styles/styles";
import FlatListExample from "./component/FlatListExample";
import FlatListCallBackend from "./component/FlatListCallBackend";
import NewsApp from "./component/NewsApp";
import AxiosgetData from "./component/AxiosgetData";
import AxiosPostData from "./component/AxiosPostData";
import WeatherLondon from "./component/WeatherLondon";
import WeatherBangkok from "./component/WeatherBangkok";
import ModalExample from "./component/modalExample";
import WeatherApp from "./component/WeatherApp";
export default function App(): React.JSX.Element {
  return (
    <View>
      {/* <ProfileScreen /> */}
      {/* <FlatListExample/> */}
      {/* <FlatListCallBackend/> */}
      {/* <NewsApp/> */}
      {/* <AxiosgetData/> */}
      {/* <AxiosPostData/> */}
      {/* <WeatherLondon/> */}
      {/* <WeatherBangkok/> */}
      <WeatherApp/>
    </View>
  );
}
