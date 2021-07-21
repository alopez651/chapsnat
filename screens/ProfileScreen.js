import { Text, View } from "react-native";
import * as React from "react";
import firebase from "@firebase/app"


export default function ProfileScreen() {
    console.log(firebase.auth().currentUser);
  return (
    <View>
      <Text>{firebase.auth().currentUser.displayName}</Text>
    </View>
  );
}