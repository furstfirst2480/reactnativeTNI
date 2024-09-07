import { Button, StyleSheet, Text, View,Alert } from "react-native";
import React, {useLayoutEffect} from "react";
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import {useNavigation} from '@react-navigation/native'
import AppLogo from "../component/AppLogo";
import {
    HeaderButton,
    HeaderButtons,
    Item
} from 'react-navigation-header-buttons';
import 'react-native-gesture-handler';

const MaterialHeaderButton = (props: any) => (
    // the `props` here come from <Item ... />
    // you may access them and pass something else to `HeaderButton` if you like
    <HeaderButton IconComponent={MaterialIcon} iconSize={23} {...props} />
    );
    
const HomeScreen = (): React.JSX.Element => {
    const navigation = useNavigation<any>();
    useLayoutEffect(() => {
      navigation.setOptions({
        title: 'หน้าหลัก',
        headerTitle: () => <AppLogo />,
        headerTitleAlign: 'center',
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
            <Item title="menu" iconName="menu"
            onPress={()=>{
             navigation.openDrawer();
            }}
            />
          </HeaderButtons>
        ),
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
            <Item title="logout" iconName="logout"
            onPress={()=>{
              Alert.alert("Log out","Close Menu")
            }}
            />
          </HeaderButtons>
        ),
      });
    }, [navigation]);
    


    const gotoAbout = () => {
    navigation.navigate("About", {
      companyName: "Thai-Nichi Institute of Technology",
      companyId: 100,
    });
  };

  return (
    <View style={styles.container}>
      <MaterialIcon name="home" size={40} color='pink'/>
      <Text>HomeScreen</Text>
      <Button title="About us" onPress={gotoAbout} />
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  postContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  postText: {
    margin: 10,
    fontSize: 16,
  },
  postContent: {
    color: "blue", // เปลี่ยนสีข้อความที่ถูกส่งกลับมา
    fontWeight: "bold",
  },
});

// import { Button, StyleSheet, Text, View } from "react-native";
// import React from "react";
// import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'

// const HomeScreen = ({ navigation,route }: any): React.JSX.Element => {
//   const gotoAbout = () => {
//     navigation.navigate("About", {
//       companyName: "Thai-Nichi Institute of Technology",
//       companyId: 100,
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <MaterialIcon name="home" size={40} color='pink'/>
//       <Text>HomeScreen</Text>
//       <Button title="About us" onPress={gotoAbout} />
//       <View style={styles.postContainer}>
//         <Button
//           title="Create post"
//           onPress={() => navigation.navigate("CreatePost")}
//         />
//         <Text style={styles.postText}>Post:</Text>
//         <Text style={styles.postContent}>{route.params?.post}</Text>
//       </View>
//     </View>
//   );
// };

// export default HomeScreen;
// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: "bold",
//   },
//   postContainer: {
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 50,
//   },
//   postText: {
//     margin: 10,
//     fontSize: 16,
//   },
//   postContent: {
//     color: "blue", // เปลี่ยนสีข้อความที่ถูกส่งกลับมา
//     fontWeight: "bold",
//   },
// });