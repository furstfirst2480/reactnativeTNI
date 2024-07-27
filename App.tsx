import { StatusBar } from "expo-status-bar";
import { 
  StyleSheet, 
  Text, 
  View, 
  Button, 
  Alert 
} from "react-native";
import AppFooter from "./component/AppFooter";
import AppHeader from "./component/AppHeader";
export default function App():React.JSX.Element {
  const onClickMe = ()=>{
    Alert.alert("Hello","Input your full name");
  }
  const users =[
    {id:1001,name:'John'},
    {id:1002,name:'Mary'}
  ]
  return (
    
    <View style={styles.container}>
     <View style={styles.headerStyle}>
      <AppHeader  title="Header"></AppHeader>
      </View>
      <Text>Message from App.tsx</Text>
      {
        users.map((data,index)=>{
        return(
          <Text >
           test
          </Text>
        )
        })}
      <Button title ="Click Me"
      onPress={onClickMe}
      color="blue"
      // onPress={()=>{Alert.alert('Hi','React Native is Fun!!')}}
      />
      <View style={styles.footerStyle}>
      <AppFooter ></AppFooter>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "auto",
    height: "auto",
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  headerStyle:{
    flex: 1,
    width: "auto",
    height: "auto",
    backgroundColor: "blue",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  footerStyle:{
    flex: 1,
    width: "auto",
    height: "auto",
    backgroundColor: "blue",
    alignItems: "flex-start",
    justifyContent: "center",
  }
  
});
