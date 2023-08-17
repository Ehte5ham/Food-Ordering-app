import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Colors from "../Theme/Colors";

const CartComponent = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container1}>
        <View style={styles.previousOrdersButton}>
          <Text style={styles.buttonText}>Previous Orders</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image source={require("../assets/pics/location.png")} />
          <Image source={require("../assets/pics/cart2.png")} />
        </View>
      </View>
      <View style={styles.container2}>
        <View style={styles.itemRow}>
          <Image
            source={require("../assets/pics/sandwich.png")}
            style={styles.itemImage}
          />
          <Text style={styles.itemTitle}>Star fish</Text>
          <View style={styles.deliveredContainer}>
            <Text style={styles.deliveredText}>Delivered</Text>
          </View>
        </View>
        <View style={styles.itemRow}>
          <Text>Order Review</Text>
          <Image source={require("../assets/pics/greater.png")} />
          <Text>Baked SeaShell</Text>
          <Image
            source={require("../assets/pics/seafood.png")}
            style={styles.largeItemImage}
          />
        </View>
        <View style={styles.itemRow}>
          <View style={styles.paidContainer}>
            <Text style={styles.paidText}>Paid:$17.50</Text>
          </View>
          <Text style={styles.rateCommentText}>Rate & Comment</Text>
        </View>
      </View>
      <View style={styles.container3}>
        <View style={styles.itemRow}>
          <Image
            source={require("../assets/pics/sandwich.png")}
            style={styles.itemImage}
          />
          <Text style={styles.itemTitle}>Star fish</Text>
          <View style={styles.notDeliveredContainer}>
            <Text style={styles.notDeliveredText}>Not Delivered</Text>
          </View>
        </View>
        <View style={styles.itemRow}>
          <Text>Order Review</Text>
          <Image source={require("../assets/pics/greater.png")} />
          <Text>Baked SeaShell</Text>
          <Image
            source={require("../assets/pics/seafood.png")}
            style={styles.largeItemImage}
          />
        </View>
        <View style={styles.itemRow}>
          <View style={styles.unpaidContainer}>
            <Text style={styles.unpaidText}>UnPaid:$20</Text>
          </View>
          <Text style={styles.rateCommentText}>Rate & Comment</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container1: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  previousOrdersButton: {
    backgroundColor: Colors.Primary,
    width: 200,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  iconContainer: {
    flex: 0.6,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
    alignItems: "center",
  },
  container2: {
    flex: 0.3,
    backgroundColor: "white",
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    borderRadius: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  container3: {
    flex: 0.3,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    borderRadius: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  itemRow: {
    flex: 0.3,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 40,
    alignItems: "center",
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 15,
  },
  largeItemImage: {
    width: 50,
    height: 90,
    marginRight: -20,
  },
  itemTitle: {
    fontWeight: "bold",
    fontSize: 17,
  },
  deliveredContainer: {
    width: 90,
    height: 30,
    backgroundColor: Colors.DeliveredContainer,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  deliveredText: {
    color: Colors.DeliveredText,
    fontWeight: "bold",
  },
  notDeliveredContainer: {
    width: 110,
    height: 30,
    backgroundColor: Colors.NotDeliveredContainer,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  notDeliveredText: {
    color: Colors.NotDeliveredText,
    fontWeight: "bold",
  },
  paidContainer: {
    width: 130,
    backgroundColor: Colors.Paid,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  paidText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  unpaidContainer: {
    width: 130,
    backgroundColor: Colors.UnPaid,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  unpaidText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  rateCommentText: {
    color: Colors.RateCommentText,
    fontSize: 14,
  },
});

export default CartComponent;
