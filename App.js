import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from 'expo-font';
import React from 'react';
// import { colors } from "./src/theme/colors";
// import Text from "./src/components/texts/text";
import { ActivityIndicator, StyleSheet, View } from 'react-native';
//internal imports
import Details from './src/screens/Details';
import Home from './src/screens/Home';
import Web from './src/screens/Web';

const Stack = createNativeStackNavigator(); //smothly screen from tab a way for your app to transition between screens where each new screen is placed on top of a stack.



export default function App() {
//font load in this section by usnig hook
let [fontsLoaded] = useFonts({
  'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
  'Spartan-Bold': require('./assets/fonts/Spartan-Bold.ttf'),
  'Spartan-Regular': require('./assets/fonts/Spartan-Regular.ttf'),
});

//fonts loaded
if (!fontsLoaded) {
  return <ActivityIndicator />;
} else {
  return (
    <View style={{ flex: 1, backgroundColor: 'black'}}>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}  />
          <Stack.Screen name="Details" component={Details} options={{ headerShown: false  }} />
          <Stack.Screen name="Web" component={Web} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
    
  )
}
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#000',
  alignItems: 'center',
  justifyContent: 'center',
},
});