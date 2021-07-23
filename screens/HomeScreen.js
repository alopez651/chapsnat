import React, { useState, useEffect } from "react";
import { FlatList, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import db from "../firebase";
import firebase from "@firebase/app";

export default function HomeScreen({ navigation }) {
  const [chatList, setChatList] = useState([]);
  var user = firebase.auth().currentUser;
  useEffect(() => {
    let chatsRef = db.collection("Chats");
    let query = chatsRef.where("users", "array-contains", firebase.auth().currentUser.uid);
    let unsubscribeFromNewSnapshots = query
      .onSnapshot((querySnapshot) => {
        let newChatList = [];
        querySnapshot.forEach((doc) => {
          let newChat = { ...doc.data() };
          newChat.id = doc.id;
          newChatList.push(newChat);
        });
        setChatList(newChatList);
      });
    return function cleanupBeforeUnmounting() {
      unsubscribeFromNewSnapshots();
    };
  }, []);


  return (
    <View style={styles.container}>
      <FlatList
        data={chatList}
        renderItem={({ item }) => (
          <TouchableOpacity
          style = {styles.item}
            onPress={() => navigation.navigate("Chat", {chatname: item.id})}
          >
            <Text style={styles.item}>{item.id}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFC00", //#CCCC99
  },
  item: {
    padding: 5,
    fontSize: 18,
    height: 44,
    marginTop: 10,
    backgroundColor: 'white',
    fontFamily: 'Futura',    //might only work or IOS

  },
  
});