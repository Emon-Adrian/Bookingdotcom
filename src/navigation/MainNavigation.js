import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Saved from '../screens/Saved';
import Booking from '../screens/Booking';
import Profile from '../screens/Profile';
import FontAwesome from "react-native-vector-icons/FontAwesome5";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainNavigation = () => {
function BottomTabs(){
    return(
        <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarStyle: {
            height: 56,
            backgroundColor: "white",
          },
          tabBarShowLabel: true,
          tabBarActiveTintColor: "#003580",
          
        }}
        >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            //headerShown:false,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Saved"
          component={Saved}
          options={{
           // headerShown:false,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="heart" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Bookings"
          component={Booking}
          options={{
            //headerShown:false,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="bell" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
           // headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={20} color={color} />
          ),
        }}
      />
        </Tab.Navigator>
    )
}


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={BottomTabs} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });