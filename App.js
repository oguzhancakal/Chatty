import React,{useEffect} from "react";
import { Text } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator  } from "@react-navigation/native-stack";
import ChatList from "./screens/ChatList";
import Settings from "./screens/Settings";
import Chat from "./screens/Chat";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Modal, Provider } from "react-native-paper";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBs2IVvVwVjW_2-9wFqR35xlyJel6xCeho",
  authDomain: "chatty-1a622.firebaseapp.com",
  projectId: "chatty-1a622",
  storageBucket: "chatty-1a622.appspot.com",
  messagingSenderId: "1080369697375",
  appId: "1:1080369697375:web:356753a0f478a735eb01ea"
};

const Stack = createNativeStackNavigator();

const Tabs = createBottomTabNavigator();

const TabsNavigator = () => {
  const navigation = useNavigation()
  useEffect(()=>{
    const isLoggedIn= false
    if(!isLoggedIn) {
      navigation.navigate("SignUp")
    }
  },[])
  return (
  <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        return (
          <Ionicons
            name={route.name === "ChatList" ? "chatbubbles" : "settings"}
            color={color}
            size={size}
          />
        );
      },
    })}
  >
    <Tabs.Screen name="ChatList" component={ChatList} />
    <Tabs.Screen name="Settings" component={Settings} />
  </Tabs.Navigator>
  )
}


const App = () => {
  return (
    <NavigationContainer>
      <Provider>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={TabsNavigator}
            options={{ headerShown: false }}
          />
          <Tabs.Screen name="Chat" component={Chat} />
          <Tabs.Screen name="SignUp" component={SignUp} />
          <Tabs.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
