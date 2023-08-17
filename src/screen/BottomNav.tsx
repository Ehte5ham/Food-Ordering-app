import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import DrawerNav from "./DrawerNav";
export const HomeScreen = () => {
  return <DrawerNav />;
};

const CartScreen = () => {
  return (
    <View>
      <Text style={styles.text}>CartScreen</Text>
    </View>
  );
};

const ImageScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ImageScreen</Text>
    </View>
  );
};
const Tab = createBottomTabNavigator();

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ProfileScreen</Text>
    </View>
  );
};

const BottomNav = (navigation) => {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="shopping-cart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Images"
        component={ImageScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="images" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});
