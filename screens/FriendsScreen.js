import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  KeyboardAvoidingView,

} from "react-native";
import CustomMultiPicker from "react-native-multiple-select-list";

import * as React from "react";
import { useState, useEffect } from "react";
import Colors from "../constants/Colors";
import db from "../firebase";
import firebase from "@firebase/app";

// const userListDemo = {
//   123: "Jenny",
//   124: "Ashwin",
//   125: "Pavan",
// };

export default function FriendsScreen( {navigation}) {
  const [chatName, setChatName] = useState("");
  const [userList, setUserList] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    // download user list from Firebase
    fetch("https://us-central1-chapsnat-3f4f7.cloudfunctions.net/getAllUsers").then( (respose)=> {
      return respose.json();
    })
    .then((data) => {
      delete data[firebase.auth().currentUser.uid];
      setUserList(data);
    })
  }, []);

  const onPressCreateChat = () => {
    console.log("Create Chat button pressed!");
    console.log(selectedUsers);
    console.log(chatName);
    // Create new chat in Firebase
    let chatsRef = db.collection("Chats");
    chatsRef
      .doc(chatName)
      .get()
      .then((doc) => {
        if (doc.exists) {
          alert("Chat with this name already exists!");
        } else {
          chatsRef
            .doc(chatName)
            .set({
              messages: [],
              users: [...selectedUsers, firebase.auth().currentUser.uid],
            })
            .then(() => {
              console.log("Chat successfully created!");
              setSelectedUsers([]); 
              setChatName("");
              navigation.navigate("Home");
            })
            .catch((error) => {
              console.error("Error creating chat: ", error);
            });
        }
      });
  };
  //search friends by name && friends name rows
  return (
    <View style ={styles.container}>
      <View style={styles.friendListContainer}>
        <CustomMultiPicker
          options={userList}
          search={true} // should show search bar?
          multiple={true} // allow multiple select
          placeholder={"Search"}
          placeholderTextColor={"#757575"}  //#757575
          returnValue={"value"} // label or value
          callback={(selected) => {
            console.log(selected);
            selected = selected.filter((user) => user !== undefined);
            setSelectedUsers(selected);
          }} // callback, array of selected items

          //creating friends name rows
          rowBackgroundColor={"#FDFEFE"}  //#5D6D7E
          rowHeight={45}
          rowRadius={5}
          searchIconName="ios-checkmark"
          searchIconColor= "#2f95dc"
          searchIconSize={30}
          iconColor={"#00a2dd"}
          iconSize={30}
          selectedIconName={"ios-checkmark-circle-outline"}
          unselectedIconName={"ios-radio-button-off-outline"}
          scrollViewHeight={300}
          
        />
        {/* creating group chat with firends */}
      </View>
      <KeyboardAvoidingView behavior="position">
        <View style={styles.newChatContainer}>
          <Text>New chat name:</Text>
          <TextInput style={styles.chatNameInput} onChangeText={setChatName} />
          <Button
            onPress={onPressCreateChat}
            title= "Create Chat"
            color="#2f95dc"
            accessibilityLabel="Create Chats"
            disabled={chatName.length < 1 || selectedUsers.length < 1}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const offset = 16;
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#FFFC00",
    fontFamily: 'Futura', 
    // backgroundImage: 'url("https://cdn.unsell.design/2020/05/f6f57aa2-abstract-yellow-background.jpg")',
   
  },
  newChatContainer: {
    margin: offset,
    padding: offset,
    borderRadius: offset,
    backgroundColor: '#FFFC00', //#FFFC00
    fontFamily: 'Futura', 
  },
  chatNameInput: {
    height: offset * 2,
    margin: offset,
    paddingHorizontal: offset,
    borderColor: "#111111",   //111111
    borderWidth: 1,
    fontSize: offset,
    fontFamily: 'Futura', 
  },
});

// import { Text, View } from "react-native";

// import * as React from "react";

// export default function FriendsScreen() {
//   return (
//     <View>
//       <Text>Friends Screen</Text>
//     </View>
//   );
// }