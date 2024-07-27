import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import styles from '../styles/styles';

const ProfileScreen = (): React.JSX.Element => {
  const imageprofile = require("../assets/profileimage.jpg");
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer} >
        <Image source= {imageprofile} style={styles.profileImage} ></Image>
        <Text style={styles.profileName}>Supakrit Methwanichkul</Text>
      </View>
  
    </View>
  )
}

export default ProfileScreen



