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
    Alert.alert("Hi","hello React.jf");
  }
  const users =[
    {id:1001,name:'John'},
    {id:1002,name:'Mary'}
  ]
  return (
    <View style={styles.container}>
      <AppHeader title="this is Header " year={2018}></AppHeader>
      <AppHeader title="this is Header"></AppHeader>
      <Text>Hello React Native!</Text>
      {
        users.map((data,index)=>{
        return(
          <Text key={data.id}>
            No. {index+1}  ID: {data.id} Name:{data.name}
          </Text>
        )
        })}
      <Button title ="Click Me"
      onPress={onClickMe}
      color="blue"
      // onPress={()=>{Alert.alert('Hi','React Native is Fun!!')}}
      />
      <AppFooter></AppFooter>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
