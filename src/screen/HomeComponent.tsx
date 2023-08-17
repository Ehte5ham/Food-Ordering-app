import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useNavigation } from "@react-navigation/native";
import Colors from "../Theme/Colors";

SplashScreen.preventAutoHideAsync();

const HomeComponent = () => {
  const navigation = useNavigation();
  const [isLoaded] = useFonts({
    "mrt-mid": require("../assets/fonts/Outfit-VariableFont_wght.ttf"),
  });
  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync(); //hide the splashscreen
    }
  }, [isLoaded]);
  if (!isLoaded) {
    return null;
  }

  // const [name, setName] = useState("");
  const data = [
    {
      id: 1,
      name: "pizza",
      image: require("../assets/pics/pizza.png"),
      description: "This is Description",
      price: "$8.99",
      fullname: "Margarita Pepperoni Pizza",
      burger1: require("../assets/pics/burger1.png"),
      burger2: require("../assets/pics/burger2.png"),
      burger3: require("../assets/pics/burger3.png"),
      burger4: require("../assets/pics/burger4.png"),
    },
    {
      id: 2,
      name: "Burgers",
      image: require("../assets/pics/burger.png"),
      description: "This is Description",
      price: "$12.99",
      fullname: "Cheese Burger whopper",
      burger1: require("../assets/pics/burger1.png"),
      burger2: require("../assets/pics/burger2.png"),
      burger3: require("../assets/pics/burger3.png"),
      burger4: require("../assets/pics/burger4.png"),
    },
    {
      id: 3,
      name: "Pasta",
      image: require("../assets/pics/pasta.png"),
      description: "This is Description",
      price: "$17.99",
      fullname: "Margarita Pepperoni Pizza",
      burger1: require("../assets/pics/burger1.png"),
      burger2: require("../assets/pics/burger2.png"),
      burger3: require("../assets/pics/burger3.png"),
      burger4: require("../assets/pics/burger4.png"),
    },
    {
      id: 4,
      name: "Sandwich",
      image: require("../assets/pics/sandwich.png"),
      description: "This is Description",
      price: "$22.99",
      fullname: "Margarita Pepperoni Pizza",
      burger1: require("../assets/pics/burger1.png"),
      burger2: require("../assets/pics/burger2.png"),
      burger3: require("../assets/pics/burger3.png"),
      burger4: require("../assets/pics/burger4.png"),
    },
    {
      id: 5,
      name: "Fries",
      image: require("../assets/pics/fries.png"),
      description: "This is Description",
      price: "$4.99",
      fullname: "Margarita Pepperoni Pizza",
      burger1: require("../assets/pics/burger1.png"),
      burger2: require("../assets/pics/burger2.png"),
      burger3: require("../assets/pics/burger3.png"),
      burger4: require("../assets/pics/burger4.png"),
    },
    {
      id: 6,
      name: "Kebab",
      image: require("../assets/pics/kebab.png"),
      description: "This is Description",
      price: "$19.99",
      fullname: "Mix of Beef,Chicken,Ribs,Potato",
      burger1: require("../assets/pics/burger1.png"),
      burger2: require("../assets/pics/burger2.png"),
      burger3: require("../assets/pics/burger3.png"),
      burger4: require("../assets/pics/burger4.png"),
    },
  ];
  const data2 = [
    {
      id: 11,
      name: "Vegan",
      image: require("../assets/pics/vegas.png"),
    },
    {
      id: 22,
      name: "Sea food",
      image: require("../assets/pics/seafood.png"),
    },
    {
      id: 33,
      name: "Fast food",
      image: require("../assets/pics/fastfood.png"),
    },
    {
      id: 44,
      name: "Kebab",
      image: require("../assets/pics/kebab2.png"),
    },
    {
      id: 55,
      name: "Salad",
      image: require("../assets/pics/salad.png"),
    },
    {
      id: 66,
      name: "Dessert",
      image: require("../assets/pics/desert.png"),
    },
    {
      id: 77,
      name: "Cake",
      image: require("../assets/pics/cake.png"),
    },
    {
      id: 88,
      name: "Coffee",
      image: require("../assets/pics/coffee.png"),
    },
  ];

  return (
    <View style={styles.maincontainer} onLayout={handleOnLayout}>
      <View style={styles.container1}>
        <Text style={styles.headerText}>Delicios Food?</Text>
        <Text style={styles.subHeaderText}>Go Ahead...</Text>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search for your favourite food"
            style={styles.searchInput}
          />
        </View>
        <View style={styles.offerContainer}>
          <Text style={styles.offerText}>30% Off on your first purchase</Text>
        </View>
      </View>
      <View style={styles.container2}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("DetailScreen", { item })}
            >
              <ImageBackground source={item.image} style={styles.foodImage}>
                <Text style={styles.foodName}>{item.name}</Text>
              </ImageBackground>
            </TouchableOpacity>
          )}
        />
        <Text style={styles.seeMoreText}>See More...</Text>
      </View>
      <View style={styles.container3}>
        <FlatList
          data={data2}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          numColumns={4}
          renderItem={({ item }) => (
            <View style={styles.categoryItem}>
              <Image source={item.image} style={styles.categoryImage} />
              <Text style={styles.categoryName}>{item.name}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default HomeComponent;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    paddingHorizontal: 32,
  },
  container1: {
    flex: 0.2,
  },
  container2: {
    flex: 0.5,
  },
  container3: {
    flex: 0.3,
  },
  headerText: {
    fontSize: 15,
    fontFamily: "mrt-mid",
  },
  subHeaderText: {
    marginVertical: 10,
    fontSize: 15,
    fontFamily: "mrt-mid",
  },
  searchContainer: {
    justifyContent: "center",
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    width: "100%",
    borderRadius: 25,
    padding: 5,
    paddingHorizontal: 30,
    backgroundColor: "#e0e0e0",
  },
  offerContainer: {
    backgroundColor: Colors.Secondary,
    alignSelf: "center",
    paddingHorizontal: 10,
    marginTop: 10,
    borderRadius: 25,
  },
  offerText: {
    textAlign: "center",
    color: "white",
    fontSize: 14,
    fontFamily: "mrt-mid",
  },
  foodImage: {
    height: 137,
    width: 77,
    marginHorizontal: 12,
    marginVertical: 5,
  },
  foodName: {
    fontSize: 14,
    padding: 5,
    fontFamily: "mrt-mid",
  },
  seeMoreText: {
    color: "#2a7dff",
    alignSelf: "center",
  },
  categoryItem: {
    alignItems: "center",
    marginHorizontal: 4,
  },
  categoryImage: {
    height: 60,
    width: 70,
    alignItems: "center",
  },
  categoryName: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: "mrt-mid",
  },
});
