import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Loading from "./screens/Loading";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const Navigating = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="First" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Loading" component={Loading} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Loading" component={Loading} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator> */}
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Navigating} options={{ headerShown: false }}></Tab.Screen>
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
      {/* <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <Button title="Show Date Picker" onPress={showDatePicker} />
        <DateTimePickerModal isVisible={isDatePickerVisible} display="inline" mode="date" onConfirm={handleConfirm} onCancel={hideDatePicker} />
      </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
