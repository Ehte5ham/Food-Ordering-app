import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import Colors from "../Theme/Colors";

const NotificationComponent = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container1}>
        <View style={styles.offerContainer}>
          <Text style={styles.offerText}>30% Off on your first purchase</Text>
        </View>
        <View style={styles.offerContainer2}>
          <Text style={styles.offerText}>50% Off on invitations</Text>
        </View>
      </View>
      <View style={styles.container2}>
        <ImageBackground
          source={require("../assets/pics/starr.png")}
          style={styles.dailyOffersBackground}
        >
          <Text style={styles.dailyOffersText}>Daily{"\n"}Offers</Text>
        </ImageBackground>
        <View style={styles.offersDescription}>
          <Text style={styles.offersDescriptionText}>
            Daily offers are proposed everyday with special prices to pick!
          </Text>
        </View>
      </View>
      <View style={styles.container3}>
        <Image
          source={require("../assets/pics/notificationpic1.png")}
          style={styles.notificationImage1}
        />
        <Image
          source={require("../assets/pics/notificationpic2.png")}
          style={styles.notificationImage2}
        />
        <Image
          source={require("../assets/pics/notificationpic3.png")}
          style={styles.notificationImage3}
        />
        <Image
          source={require("../assets/pics/notificationpic4.png")}
          style={styles.notificationImage4}
        />
        <Image
          source={require("../assets/pics/notificationpic5.png")}
          style={styles.notificationImage5}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  container1: {
    flex: 0.15,
    alignItems: "center",
  },
  offerContainer: {
    width: 300,
    height: 50,
    backgroundColor: Colors.Secondary,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  offerContainer2: {
    width: 300,
    height: 35,
    backgroundColor: Colors.Primary,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  offerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  container2: {
    flex: 0.25,
    flexDirection: "row",
    margin: 5,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  dailyOffersBackground: {
    width: 120,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
  dailyOffersText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  offersDescription: {
    width: 180,
  },
  offersDescriptionText: {
    fontSize: 15,
  },
  container3: {
    flex: 0.58,
    backgroundColor: "#f4f4f4",
    width: "90%",
    borderRadius: 20,
  },
  notificationImage1: {
    position: "absolute",
    top: 10,
    left: 15,
    width: 170,
  },
  notificationImage2: {
    position: "absolute",
    right: 20,
    width: 120,
    top: 10,
  },
  notificationImage3: {
    position: "absolute",
    top: 110,
    left: 25,
    height: 150,
  },
  notificationImage4: {
    position: "absolute",
    right: 20,
    top: 160,
    width: 170,
  },
  notificationImage5: {
    position: "absolute",
    bottom: 5,
    left: 25,
  },
});

export default NotificationComponent;
