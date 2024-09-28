import React, { useEffect, useState } from "react";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ProductScreen from "./screens/ProductScreen";
import MenuScreen from "./screens/MenuScreen";
import DetailScreen from "./screens/DetailScreen";


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { HeaderButtonsProvider } from "react-navigation-header-buttons";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./screens/LoginScreen";
import Toast from "react-native-toast-message";

import { Provider } from "react-redux";
import { store } from "./redux-toolkit/store";
import { useAppSelector, useAppDispatch } from "./redux-toolkit/hook";
import {
  selectAuthState,
  setIsLoading,
  setIsLogin,
  setProfile,
} from "./auth/auth-slice";
import { getProfile } from "./services/auth-service";
import Ionicons from "react-native-vector-icons/Ionicons";

import { ActivityIndicator, View } from "react-native";
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CameraScreen from "./screens/CameraScreen";

const HomeStack = createNativeStackNavigator();
const ProductStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const CameraStack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

function TabContainer() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName="";
          if (route.name === "HomeStack") {
            iconName = focused
              ? "home"
              : "home-outline";
          } else if (route.name === "CameraStack") {
            iconName = focused ? "camera" : "camera-outline";
          }
          // You can return any component that you like here!​
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown:false,
        tabBarActiveBackgroundColor:"lightpink",
      })}
      //screenOptions={{ headerShown: false }}
    >
   
      <Tab.Screen
        name="HomeStack"
        component={HomeScreen}
        options={{ tabBarLabel: "Home" }}
      />
           
      <Tab.Screen
        name="CameraStack"
        component={CameraStackScreen}
        options={{ tabBarLabel: "Camera" }}
      />
    </Tab.Navigator>
  );
}
function CameraStackScreen() {
  return (
    <CameraStack.Navigator
      initialRouteName="Products"
      screenOptions={{
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <CameraStack.Screen name="Camera" component={CameraScreen} />
    </CameraStack.Navigator>
  );
}
const App = (): React.JSX.Element => {
  //ใช้ useAppSelector เพื่อดึง state จาก store
  const { isLogin, isLoading } = useAppSelector(selectAuthState);
  const dispatch = useAppDispatch();

  const checkLogin = async () => {
    try {
      dispatch(setIsLoading(true));
      const response = await getProfile();
      if (response?.data.data.user) {
        dispatch(setProfile(response.data.data.user));
        dispatch(setIsLogin(true));
      } else {
        dispatch(setIsLogin(false));
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      checkLogin();
    }, [])
  );

  if (isLoading) {
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="blue" />
    </View>;
  }

  function CameraStackScreen() {
    return (
      <CameraStack.Navigator //Global​
        initialRouteName="Products"
        screenOptions={{
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <CameraStack.Screen
          name="Camera"
          component={CameraScreen}
          options={{ title: "Camera" }}
        />
      </CameraStack.Navigator>
    );
  }

  function HomeStackScreen() {
    return (
      <HomeStack.Navigator
        initialRouteName="Products"
        screenOptions={{
          // headerStyle: { backgroundColor: "#ffde59"},
          // headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <HomeStack.Screen
          name="Home"
          component={HomeScreen}
          // options={{title: 'หน้าหลัก'}}
        />
        <HomeStack.Screen
          name="About"
          component={AboutScreen}
          /* options={{title: 'เกี่ยวกับเรา',
          headerStyle:{backgroundColor: '#20b2aa'},
          headerTintColor: 'white',
          headerTitleStyle:{fontWeight: 'bold'},
          headerTitleAlign: 'center'
          }} */
        />
        {/* <HomeStack.Screen name = 'CreatePost' component={CreatePostScreen}/> */}
      </HomeStack.Navigator>
    );
  }

  function ProductStackScreen() {
    return (
      <ProductStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          // headerStyle: { backgroundColor: "#ffde59"},
          // headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold" },
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
      <HeaderButtonsProvider stackType="native">
        {isLogin ? (
          <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={(props) => <MenuScreen {...props} />}
          >
            <Drawer.Screen name="Home" component={TabContainer} />
            <Drawer.Screen name="ProductStack" component={ProductStackScreen} />
          </Drawer.Navigator>
        ) : (
          <LoginStackScreen />
        )}
      </HeaderButtonsProvider>
      <Toast />
    </>
  );
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default AppWrapper;