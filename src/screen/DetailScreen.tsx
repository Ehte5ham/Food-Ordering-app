import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import FavouriteComponent from "./Favouritecomponent";
import CartComponent from "./CartComponent";
import Colors from "../Theme/Colors";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList } from "react-native-gesture-handler";

const Tab = createMaterialTopTabNavigator();

const AllItems = ({ item, navigation }) => {
  const [count, setCount] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = async (itemData) => {
    const existingItem = cartItems.find((item) => item.id === itemData.id);
    if (existingItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === itemData.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCartItems);
      await AsyncStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    } else {
      const updatedCartItems = [...cartItems, { ...itemData, quantity: 1 }];
      setCartItems(updatedCartItems);
      await AsyncStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleSmallImagePress = (imageSource) => {
    setSelectedImage(imageSource);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}></View>
      <View style={styles.flatContainer}>
        <View style={styles.imageRow}>
          <Image
            source={selectedImage || item.image}
            style={styles.mainImage}
          />
          <View style={styles.smallImagesContainer}>
            <TouchableOpacity
              onPress={() => handleSmallImagePress(item.burger1)}
            >
              <Image source={item.burger1} style={styles.smallImage} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleSmallImagePress(item.burger2)}
            >
              <Image source={item.burger2} style={styles.smallImage} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleSmallImagePress(item.burger3)}
            >
              <Image source={item.burger3} style={styles.smallImage} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleSmallImagePress(item.burger4)}
            >
              <Image source={item.burger4} style={styles.smallImage} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.itemInfoContainer}>
          <Text style={styles.itemName}>{item.fullname}</Text>
          <Image
            source={require("../assets/pics/heart.png")}
            style={styles.heartIcon}
          />
        </View>
        <Text style={styles.itemDescription}>{item.description}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.incrementContainer}>
          <TouchableOpacity onPress={increment} style={styles.incrementButton}>
            <Text style={styles.incrementText}>+</Text>
          </TouchableOpacity>
          <View style={styles.countContainer}>
            <Text style={styles.countText}>{count}</Text>
          </View>
          <TouchableOpacity onPress={decrement} style={styles.decrementButton}>
            <Text style={styles.decrementText}>-</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            addToCart(item);
            increment();
          }}
          style={styles.addToCartButton}
        >
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Recommended = () => {
  return <View>{/* Your content for the Recommended tab */}</View>;
};
const NewItems = () => {
  return <View>{/* Your content for the New Items tab */}</View>;
};
const Special = () => {
  return <View>{/* Your content for the Special tab */}</View>;
};

const DetailScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const [cartItems, setCartItems] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: item.name,
      headerRight: () => (
        <View style={styles.cartIconContainer}>
          <Image
            source={require("../assets/pics/cart2.png")}
            style={styles.cartIcon}
          />
        </View>
      ),
      headerTitleAlign: "center",
    });
  }, [item.name]);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors.Secondary,
        tabBarInactiveTintColor: "#555",
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarIndicatorStyle: styles.tabBarIndicator,
      })}
    >
      <Tab.Screen name="All Items">
        {(props) => <AllItems {...props} item={item} />}
      </Tab.Screen>
      <Tab.Screen name="New Items" component={NewItems} />
      <Tab.Screen name="Recommended" component={Recommended} />
      <Tab.Screen name="Special" component={Special} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  topContainer: {
    flex: 0.1,
  },
  flatContainer: {
    flex: 0.8,
    justifyContent: "center",
    top: -30,
  },
  imageRow: {
    flexDirection: "row",
  },
  mainImage: {
    height: 279,
    width: 242,
    marginHorizontal: 12,
    marginVertical: 12,
    borderRadius: 10,
  },
  smallImagesContainer: {
    alignItems: "center",
    flex: 1,
  },
  smallImage: {
    height: 70,
    width: 70,
    marginVertical: 10,
  },
  itemInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    alignItems: "center",
  },
  itemName: {
    fontSize: 22,
    fontWeight: "bold",
    flex: 0.7,
  },
  heartIcon: {
    width: 40,
    height: 40,
  },
  itemDescription: {
    fontSize: 15,
    padding: 25,
  },
  itemPrice: {
    fontSize: 20,
    paddingHorizontal: 25,
    fontWeight: "bold",
  },
  bottomContainer: {
    flex: 0.1,
    paddingHorizontal: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  incrementContainer: {
    backgroundColor: "#d9d9d9",
    width: 100,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
  incrementButton: {
    backgroundColor: "white",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  incrementText: {
    fontSize: 20,
  },
  countContainer: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  countText: {},
  decrementButton: {
    backgroundColor: "white",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  decrementText: {
    fontSize: 20,
  },
  addToCartButton: {
    backgroundColor: Colors.Secondary1,
    width: 120,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderBottomEndRadius: 18,
    borderBottomStartRadius: 18,
    borderTopEndRadius: 18,
  },
  addToCartText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  tabBarLabel: {
    fontSize: 9,
    justifyContent: "center",
  },
  tabBarIndicator: {
    borderBottomColor: "#ff6a6a",
    borderBottomWidth: 2,
  },
  cartIconContainer: {
    marginRight: 15,
  },
  cartIcon: {
    width: 30,
    height: 30,
  },
});

export default DetailScreen;
