import { Button , Text, View ,Image } from 'react-native'
import React, { useState } from 'react'
import { stylist } from '../styles/styles';

const ProfileScreen = (): React.JSX.Element => {

  const originalImage = require('../assets/profileimage.jpg');
  const newImage = require('../assets/newprofileimage.jpg');
  
  const originalName = 'Supakrit Methawanichkul';
  const newName ='New Name';

  const [imageprofile,setImageprofile] = useState(originalImage);
  const [name,setName] = useState(originalName);
 
  const handleChangeName = ()=>{
    setName((prevName) =>
      prevName === originalName ? newName : originalName
  );
  };
  const handleChangePic = () => {
  
    setImageprofile((prevImage) =>
      prevImage === originalImage ? newImage : originalImage
    );
  };

 
  return (
    <View style={stylist.container}>
      <View style={stylist.profileContainer} >
        <Image source= {imageprofile} style={stylist.profileImage} />
        <View>
        <Text style={stylist.profileName}>{name}</Text>
        <View >
        <Button title='Change Name' onPress={handleChangeName}/>
        <Text style={stylist.button} >t</Text>
        <Button title='Change Picture' onPress={handleChangePic}/>
        </View>
        </View>
      </View>
      
      
  
    </View>
  )
}

export default ProfileScreen



