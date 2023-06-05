import React from 'react';
import { Text, View } from 'react-native';
 
export default function Contacts({navigation}) {
  return (
    <View style={{marginTop:60}}>
 		   <Text
        onPress={()=> navigation.navigate('Information')} 
        >Information...</Text>
    </View>
  );
}