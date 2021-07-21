import { Text, View, TextInput, Button } from "react-native";
import firebase from "@firebase/app";
import Colors from "../constants/Colors";
import React, { useState, useEffect } from "react";


export default function SignupScreen() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const onPressCreate = async () => {

    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(login_Success, login_Failed);
  };

  const login_Success = (userCredential) => {
    console.log("SUCCESS");
    var cur_user = userCredential.user;
    cur_user.updateProfile({
        displayName: name,
      });
    };
 

  const login_Failed = () => {
    alert("Login failure. Please try again.");
  };

  return (
    <View>
      <Text>Email:</Text>
      <TextInput onChangeText={setEmail} />

      <Text>Password (6+ characters):</Text>
      <TextInput onChangeText={setPassword} />

      <Text>Name:</Text>
      <TextInput onChangeText={setName} />

      <Button
        onPress={onPressCreate}
        title="Sign up"
        color={Colors.snapblue}
        accessibilityLabel="Sign up"
      />
    </View>
  );
}