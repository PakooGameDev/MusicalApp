
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from  '@expo/vector-icons'

import { Home } from '../pages/HomePage.js'
import { Library } from '../pages/LibraryPage.js'
import { Settings } from '../pages/SettingsPage.js'

const navMenu = createBottomTabNavigator();

export function Navigation() {
    return (
      <NavigationContainer style={{ backgroundColor: '#212529',}}>
      <navMenu.Navigator  
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height:50,
          backgroundColor: '#2a2e32',
          border:0,
        },
        tabBarInactiveTintColor:'#a1a3a4',
        tabBarActiveTintColor:'#d53a37',
      }}>
          <navMenu.Screen name='home' component={Home} options={{
              tabBarIcon:({color, size}) => (
                <Feather name='music' color={color} size={size}/>
              ),
            }}
          />
          <navMenu.Screen name='library' component={Library} options={{
              tabBarIcon:({color, size}) => (
                <Feather name='bookmark' color={color} size={size}/>
              ),
            }}
          />         
          <navMenu.Screen name='settings' component={Settings} options={{
              tabBarIcon:({color, size}) => (
                <Feather name='settings' color={color} size={size}/>
              ),
            }}
          />
      </navMenu.Navigator>
      </NavigationContainer>
    );
}
  
