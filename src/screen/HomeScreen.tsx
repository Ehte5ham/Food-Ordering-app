import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import HomeComponent from "./HomeComponent";
import FavouriteComponent from "./Favouritecomponent";
import NotificationComponent from "./NotificationComponent";
import ProfileComponent from "./ProfileComponent";
import CartComponent from "./CartComponent";

const HomeScreen = () => {
  const [name, setName] = useState("Home");
  return (
    <View style={styles.maincontainer}>
      <View style={styles.ContentContainer}>
        {name == "Home" ? (
          <HomeComponent />
        ) : name == "Favourite" ? (
          <FavouriteComponent />
        ) : name == "Notification" ? (
          <NotificationComponent />
        ) : name == "Profile" ? (
          <ProfileComponent />
        ) : (
          <CartComponent />
        )}
      </View>

      <View style={styles.BottomContainer}>
        <TouchableOpacity onPress={() => setName("Home")}>
          {/* <Text>gj</Text> */}
          <Image source={require("../assets/pics/homeicon.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setName("Favourite")}>
          <Image source={require("../assets/pics/favouriteicon.png")} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setName("Cart")}
          style={{ bottom: 20 }}
        >
          <Image source={require("../assets/pics/cart.png")} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setName("Notification")}>
          <Image source={require("../assets/pics/notificationicon.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setName("Profile")}>
          <Image source={require("../assets/pics/profile.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
  },
  ContentContainer: {
    flex: 0.93,
  },
  BottomContainer: {
    flex: 0.07,
    // backgroundColor: "pink",

    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
