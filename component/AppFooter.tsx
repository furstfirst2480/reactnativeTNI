import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AppFooter = ():React.JSX.Element => {
    const hello = "Thai nichi Institute of Technology"
    const hello2 = <Text>Hello JSX</Text>;
    const isLogin = true;
    
    return (
    <View>
     <Text style={styles.myText}>
      Thai-Nichi Institute of Technology
     </Text>
   
    </View>
  )
}

export default AppFooter

const styles = StyleSheet.create({
  
  myText:{
      color:'red',
     
  }
})