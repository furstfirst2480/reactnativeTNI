import { Button , Text, View ,Image} from 'react-native'
import React, { useState } from 'react'
import styles from '../styles/styles';

const ProfileScreen = (): React.JSX.Element => {
  const [imageprofile,setImageprofile] = useState(require('../assets/profileimage.jpg'));
  const [name,setName] = useState("Supakrit Methawanichkul")
  const handleChangeName = ()=>{
    setName('New Name');
  }
  const handleChangePic = ()=>{
    setImageprofile(require('../assets/newprofileimage.jpg'));
  }
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer} >
        <Image source= {imageprofile} style={styles.profileImage} />
        <View>
        <Text style={styles.profileName}>{name}</Text>
        <View >
        <Button title='Change Name' onPress={handleChangeName}/>
        <Text style={styles.button} >t</Text>
        <Button title='Change Picture' onPress={handleChangePic}/>
        </View>
        </View>
      </View>
      
      
  
    </View>
  )
}

export default ProfileScreen



