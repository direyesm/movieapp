import React from "react";
import { IconButton } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import News from "../pages/News";
import Popular from "../pages/Popular";
import Search from "../pages/Search";

const Stack = createStackNavigator();

export default function StackNavigation(props) {
  const { navigation } = props;

  const buttonRight = () => {
    return (
      <IconButton
        icon="magnify"
        onPress={() => navigation.navigate("search")}
      />
    );
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: "Inicio",
          headerLeft: null,
          headerRight: () => buttonRight(),
        }}
      />
      <Stack.Screen
        name="movie"
        component={Movie}
        options={{
          title: "",
          headerTransparent: true,
          headerRight: () => buttonRight(),
        }}
      />
      <Stack.Screen
        name="news"
        component={News}
        options={{
          title: "Nuevas Películas",
          headerTransparent: true,
          headerRight: () => buttonRight(),
        }}
      />
      <Stack.Screen
        name="popular"
        component={Popular}
        options={{
          title: "Películas Populares",
          headerTransparent: true,
          headerRight: () => buttonRight(),
        }}
      />
      <Stack.Screen
        name="search"
        component={Search}
        options={{
          title: "",
        }}
      />
    </Stack.Navigator>
  );
}
