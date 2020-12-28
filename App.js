import React,{ useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import 'react-native-gesture-handler'
import Home from './src/screens/Home'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Camera from './src/components/camera'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



const bottomtabNavigator = () => {
  return (
      <Tab.Navigator tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          tabStyle:{
            backgroundColor:'black'
          }
        }}>
          <Tab.Screen name="Home" component={Home} options={{tabBarIcon:() => <Entypo name='home' color='white' size={24} />}}/>
          <Tab.Screen name="Search" component={Home} options={{tabBarIcon:() => <AntDesign name='search1' color='white' size={24} />}}/>
          <Tab.Screen name="Upload" component={Camera} options={{tabBarIcon:() => <MaterialCommunityIcons name='camera-gopro' size={50} color='white' />, tabBarLabel: () => null}}/>
          <Tab.Screen name="Message" component={Home} options={{tabBarIcon:() =>  <MaterialCommunityIcons name='message-minus-outline' color='white' size={24} />}}/>
          <Tab.Screen name="Profile" component={Home} options={{tabBarIcon:() => <Ionicons name='ios-person-outline' color='white' size={24} />}}/>
      </Tab.Navigator>
  )
}

function App() {
  return (
      <>
        <StatusBar barStyle="light-content" hidden/>
        <SafeAreaView style={{flex:1, backgroundColor:'black'}}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
              <Stack.Screen name="Home" component={bottomtabNavigator} />
            </Stack.Navigator>
          </NavigationContainer> 
        </SafeAreaView>
      </>
  )
}

const styles = StyleSheet.create({});

export default App;
