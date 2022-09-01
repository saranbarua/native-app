import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function App() {
//font load in this section by usnig hook
const [fontsLoaded] = useFonts({
  'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
  'Spartan-Bold': require('./assets/fonts/Spartan-Bold.ttf'),
  'Spartan-Regular': require('./assets/fonts/Spartan-Regular.ttf'),
});

if (!fontsLoaded) {
  return <ActivityIndicator />
} else {
  return (
    <View style={{ flex: 1, backgroundColor: 'black'}}>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}  />
          <Stack.Screen name="Details" component={Details} options={{ headerShown: false,  }} />
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