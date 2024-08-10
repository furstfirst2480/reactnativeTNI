import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import ProfileScreen from './component/ProfileScreen';
import { stylePractice ,stylist} from './styles/styles';
import Login from './component/login';

const App = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={stylist.container}>
      
      <ProfileScreen />
      
      <View style={stylist.profileContainer} >
     <View style={stylist.boxcontainer}>
      <TextInput
        style={stylist.box}
        placeholder="Enter your fullname"
        value={fullname}
        onChangeText={setFullname}
      />
    
      <TextInput
        style={stylist.box}
        placeholder="Enter your Email"
        value={email}
        onChangeText={setEmail}
      />
     
        <View>
         <Button  title='Submit' />
         </View>
         </View>
      </View>
    </View>
  );
}

export default App;
