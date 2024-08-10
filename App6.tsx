import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, Alert } from "react-native";
import { stylePractice, stylist } from "./styles/styles";
import Content from "./component/Content";
import AppHeader from "./component/AppHeader";
import AppFooter from "./component/AppFooter";

function App(): React.JSX.Element {
  const [fullname, setFullname] = useState('');
  const [message, setMessage] = useState('Message from App.tsx');
  const [footerMessage, setFooterMessage] = useState('Thai-Nichi Institute of Technology');

  useEffect(() => {
    console.log("Component has mounted");
  }, []);

  useEffect(() => {
    console.log(`Full name has changed to: ${fullname}`); // This will run whenever 'fullname' changes
  }, [fullname]);

  const handleButtonClick = () => {
    Alert.alert("Hello", `Input your full name: ${fullname}`);
  };

  return (
    <View style={stylist.container}>
      <AppHeader title={fullname} subtitle={message} />
      <Content message={message} onButtonClick={handleButtonClick} />
      <AppFooter footerText={footerMessage} />
      <TextInput
        style={stylePractice.input}
        placeholder="Enter your fullnameeeeeeeeeeeeeeeeeeeee"
        value={fullname}
        onChangeText={setFullname}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});

export default App;
