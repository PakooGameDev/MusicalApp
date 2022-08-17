import { SafeAreaView, Text} from 'react-native';
import {styles} from '../../modules/styles.js'


export function Welcome(){
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{color:'white'}}>Welcome</Text>
      </SafeAreaView>
    );
  }
  
 
