import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container:{
      alignItems: "center",
      padding :20,
      borderColor:"#666" , //bg color
    },
    profileImage:{
      borderRadius:50,
      width:100,
      height:100,
      marginRight:15,
      
    },
    profileContainer:{
      flexDirection:"row",
      alignItems:"center",
      width:"100%",
      padding:20,
      borderRadius:10,
      backgroundColor:"white",
      elevation:5,
      marginTop:50,
    },
    profileName:{
      color:'red',
      fontWeight:'bold',
      fontSize:20,
      textAlign: "right",
      
    }
  });