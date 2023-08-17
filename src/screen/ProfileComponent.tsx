import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Modal,
} from "react-native";
import Colors from "../Theme/Colors";

const ProfileComponent = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container1}>
        <ImageBackground
          source={require("../assets/pics/background-circle.png")}
          style={styles.imageBackground}
        >
          <TouchableOpacity style={styles.profileImageContainer}>
            <Image
              source={require("../assets/pics/profileimage.png")}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </ImageBackground>
        <Text style={styles.uploadText}>Upload profile picture</Text>
      </View>
      <View style={styles.container2}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput style={styles.input} />
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} />
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} />
          <Text style={styles.label}>Mobile number</Text>
          <TextInput style={styles.input} />
        </View>
      </View>
      <View style={styles.container3}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.editButtonText}>Edit profile info</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.label}>Username</Text>
            <TextInput style={styles.input}></TextInput>
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input}></TextInput>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Delete account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 0.93,
  },
  container1: {
    flex: 0.33,
  },
  imageBackground: {
    width: "100%",
    height: 150,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  profileImageContainer: {
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 55,
    overflow: "hidden",
  },
  profileImage: {
    width: 110,
    height: 110,
  },
  uploadText: {
    textAlign: "center",
  },
  container2: {
    flex: 0.64,
    margin: 8,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "dashed",
  },
  inputContainer: {
    width: 350,
    padding: 0,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 1,
    marginVertical: 5,
    paddingVertical: 10,
    borderRadius: 15,
    backgroundColor: "white",
    borderColor: "white",
  },
  container3: {
    flex: 0.06,
    justifyContent: "center",
    alignItems: "center",
  },
  editButton: {
    backgroundColor: Colors.Primary,
    width: 190,
    height: 40,
    borderRadius: 25,
    justifyContent: "center",
  },
  editButtonText: {
    textAlign: "center",
    fontSize: 17,
    color: "white",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    flex: 0.4,
    width: 300,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    justifyContent: "center",
  },
  closeButton: {
    backgroundColor: "#ff8282",
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  closeButtonText: {
    textAlign: "center",
    fontSize: 16,
    color: "white",
  },
});

export default ProfileComponent;
