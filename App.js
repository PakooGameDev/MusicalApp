import  'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import  { MainStack } from './components/Navigation/Navigation.js'
import { MenuProvider } from 'react-native-popup-menu';

export default function App() {
  return (
    <MenuProvider>
      <NavigationContainer style={{ backgroundColor: '#212529',}}>    
        <MainStack/>
      </NavigationContainer>
    </MenuProvider> 
  );
}
