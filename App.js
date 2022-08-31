import { useFonts } from 'expo-font';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './src/themes/colors';


export default function App() {
//font load in this section by usnig hook
const [fontsLoaded] = useFonts({
  'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
  'Spartan-Bold': require('./assets/fonts/Spartan-Bold.ttf'),
  'Spartan-Regular': require('./assets/fonts/Spartan-regular.ttf'),
});

  return (
    <View style={styles.container}>
    <Text style={styles.dummyText}>Create your first React Native App</Text>
  </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: colors.darkOrange,
   alignItems: 'center',
   justifyContent: 'center'
  },
  dummyText:{
    fontSize: 20,

  }
});
