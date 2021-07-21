import firebase from "@firebase/app";
import React, { useState } from "react";
import Colors from "../constants/colors";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
export default function ProfileScreen() {
  const onPressLogout = async () => {
    await firebase
    .auth()
    .signOut()
    .then(() =>  {
        console.log("Signed Out!"); 
      })
      .catch((error) => {
        var errorMessage = error.message;

        alert(error.message);
      });
    };


  return (
    <View style={styles.container}>
      <View style={styles.headerColumn}>
        <TouchableOpacity onPress={() => alert("edit!")}>
          <Image style={styles.userImage} source={{}} />
        </TouchableOpacity>
        <Text style={styles.userNameText}>{firebase.auth().currentUser.displayName}
          {/* firebase.auth().currentUser.displayName */}
        </Text>
        <View style={styles.Row}>
          <Text style={styles.descriptionText}>Los Angeles, California</Text>
        </View>
      </View>
      <View style={styles.Row}>
        <TouchableOpacity
          style={[styles.buttonContainer, styles.logoutButton]}
          onPress={onPressLogout}
        >
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  headerColumn: {
    backgroundColor: "transparent",
    paddingBottom: 20,
    paddingTop: 45,
  },
  Row: {
    alignItems: "center",
    flexDirection: "row",
  },
  descriptionText: {
    color: "#A5A5A5",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
  },
  userImage: {
    borderColor: "#FFF",
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  userNameText: {
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
    paddingBottom: 8,
    textAlign: "center",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 300,
    borderRadius: 30,
    backgroundColor: "transparent",
  },
  logoutButton: {
    backgroundColor: "#2f95dc",
  },
  logoutText: {
    color: "white",
    fontWeight: "bold",
  },
});
// import { Text, View } from "react-native";
// import * as React from "react";
// import firebase from "@firebase/app"


// export default function ProfileScreen() {
//     console.log(firebase.auth().currentUser);
//   return (
//     <View>
//       <Text>{firebase.auth().currentUser.displayName}</Text>
//     </View>
//   );
// }