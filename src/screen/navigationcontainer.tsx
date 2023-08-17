import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import { createStackNavigator } from "@react-navigation/stack";
interface Props {
  children: React.ReactNode;
}

const Navigation: React.FC<Props> = ({ children }) => {
  const Stack = createStackNavigator();
  return { children };
};

export default Navigation;

const styles = StyleSheet.create({});
