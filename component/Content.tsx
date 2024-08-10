import React from "react";
import { View, Text, Button, Alert} from "react-native";
import { stylePractice} from '../styles/styles';

interface ContentProps {
  message: string;
  onButtonClick:() => void;
//   fullname: string;
}

// const Content: React.FC<ContentProps> = ({ fullname, message }) => {
const Content = ({message,onButtonClick }:ContentProps):React.JSX.Element =>{


/* const [displayFullname,setDisplayFullname] = React.useState('')

const handleButtonClick = () =>{
    setDisplayFullname(fullname);
    Alert.alert("Hello",`Input your fullame: ${fullname}` ); */

    // const handleButtonClick = () => {
    //     Alert.alert("Hello",`Input your fullame: ${fullname}` ); 
    // };}
  return (
    <View style={stylePractice.content}>
      <Text style={stylePractice.text}>{message}</Text>
      {/* <Text style={stylePractice.text}>{displayFullname} </Text> */}
      <Button title="Click Me" onPress={onButtonClick} />
        
    </View>
  );
};

export default Content;