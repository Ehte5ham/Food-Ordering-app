import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const FavouriteComponent = () => {
  const data = [
    {
      id: 1,
      name: "Pizza Italiana",
      totalRating: 5,
      obtainRating: 4,
      image: require("../assets/pics/pizzaitaliano.png"),
    },
    {
      id: 2,
      name: "Traditional Kebab",
      totalRating: 5,
      obtainRating: 2,
      image: require("../assets/pics/traditionalkebab.png"),
    },
    {
      id: 3,
      name: "Star Fish",
      totalRating: 5,
      obtainRating: 5,
      image: require("../assets/pics/starfish.png"),
    },
    {
      id: 4,
      name: `Botson Burger's`,
      totalRating: 5,
      obtainRating: 3,
      image: require("../assets/pics/boston.png"),
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topComponent}>
        <ImageBackground
          source={require("../assets/pics/starr.png")}
          style={styles.topImageBackground}
        >
          <Text style={styles.topText}>
            {"       My \n  favourite\nrestaurants"}
          </Text>
        </ImageBackground>
      </View>
      <View style={styles.dataComponent}>
        <FlatList
          data={data}
          style={styles.flatList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image source={item.image} style={styles.itemImage} />
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemRating}>
                {item.obtainRating}/{item.totalRating}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  topComponent: {
    flex: 0.33,
    alignItems: "center",
  },
  topImageBackground: {
    width: 167,
    height: 167,
    justifyContent: "center",
    alignItems: "center",
  },
  topText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  dataComponent: {
    flex: 0.7,
    paddingHorizontal: 20,
  },
  flatList: {
    padding: 10,
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#DEDEDE",
  },
  itemImage: {
    width: 70, // Adjust the width as needed
    height: 70, // Adjust the height as needed
    marginRight: 10,
  },
  itemName: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 10,
    fontWeight: "bold",
  },
  itemRating: {
    marginTop: 40,
    fontWeight: "bold",
  },
});

export default FavouriteComponent;
