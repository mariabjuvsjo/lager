import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, Image, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from "./components/Home";
import Pick from "./components/Pick";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();



// 72f9bba02fae6b6f226cf148ed5f9e8c 
export default function App() {
  const [products, setProducts] = useState<any[]>([]);
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={
          ({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {

              const routeIcons = {
                "Lager": "home",
                "Plock": "list",
              };
              let iconName = routeIcons[route.name] || "alert";

              return <Ionicons name={iconName} size={size} color={color} />

            }, tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
            headerShown: false

          })}>
          <Tab.Screen name="Lager" >{() => <Home products={products} setProducts={setProducts} />}
          </Tab.Screen>
          <Tab.Screen name="Plock">{() => <Pick setProducts={setProducts} />}</Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />

    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525',
  }
});
