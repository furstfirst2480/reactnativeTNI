import React, { useState } from "react";
import { HeaderButtonsProvider } from "react-navigation-header-buttons";
import { View, Text } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CreatePostScreen from "./screens/CreatePostScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MenuScreen from "./screens/MenuScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ProductScreen from "./screens/ProductScreen";
import DetailScreen from "./screens/DetailScreen";
import LoginScreen from "./screens/LoginScreen";
import Toast from "react-native-toast-message";
const HomeStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const ProductStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();

const App = (): React.JSX.Element => {
  const [isLogin] = useState(false);
  function HomeStackScreen() {
    return (
      <HomeStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          //Global
          // headerStyle: { backgroundColor: "#20b2aa" },
          // headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold" },
          // headerTitleAlign: "center",
        }}
      >
        <HomeStack.Screen
          name="Home"
          component={HomeScreen}
          // options={{ title: "หน้าหลัก" }}
        />
        <HomeStack.Screen
          name="About"
          component={AboutScreen}
          options={{
            title: "เกี่ยวกับเรา",
            headerStyle: { backgroundColor: "#20b2aa" },
            headerTintColor: "white",
            // headerTitleStyle:{fontWeight:'bold'},
            headerTitleAlign: "center",
          }}
        />
        {/* <HomeStack.Screen name="CreatePost" component={CreatePostScreen} /> */}
      </HomeStack.Navigator>
    );
  }
  function ProductStackScreen() {
    return (
      <ProductStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          //Global
          // headerStyle: { backgroundColor: "#20b2aa" },
          // headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold" },
          // headerTitleAlign: "center",
        }}
      >
        <ProductStack.Screen name="Products" component={ProductScreen} />
        <ProductStack.Screen name="Details" component={DetailScreen} />
      </ProductStack.Navigator>
    );
  }
  function LoginStackScreen() {
    return (
      <LoginStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <LoginStack.Screen name="Login" component={LoginScreen} />
      </LoginStack.Navigator>
    );
  }
  return (
    <>
      
        <SafeAreaProvider>
          <NavigationContainer>
            <HeaderButtonsProvider stackType="native">
              {isLogin ? (
                <Drawer.Navigator
                  screenOptions={{ headerShown: false }}
                  drawerContent={(props) => <MenuScreen {...props} />}
                >
                  <Drawer.Screen name="HomeStack" component={HomeStackScreen} />
                  <Drawer.Screen
                    name="ProductStack"
                    component={ProductStackScreen}
                  />
                </Drawer.Navigator>
              ) : (
                <LoginStackScreen />
              )}
            </HeaderButtonsProvider>
          </NavigationContainer>
        </SafeAreaProvider>
      <Toast/>
    </>
  );
};
export default App;
