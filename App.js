import { StatusBar } from "expo-status-bar";
import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ChatScreen from "./screens/ChatScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import firebase from "@firebase/app";

const Stack = createStackNavigator();

function App() {

  const[isSingnedIn, setIsSignedIn] = useState(
    firebase.auth().currentUser ? true : false
  );

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => {
      setIsSignedIn(user ? true : flase);
    });
  },
  []);

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Tabs">

          {isSingnedIn ? (
            <>
            <Stack.Screen name="Tabs" component={BottomTabNavigator} />
            <Stack.Screen name="Chat" component={ChatScreen} />
            </>
          ) : (
            <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            </>
          )}
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default App;

// import React from "react";
// import { StyleSheet } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import ChatScreen from "./screens/ChatScreen";
// import HomeScreen from "./screens/HomeScreen";

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Chat" component={ChatScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// });

// export default App;
// import React, { useState, useCallback, useEffect } from "react";
// import { GiftedChat } from "react-native-gifted-chat";
// import db from "./firebase";
// import firebase from "firebase/app";

// export default function App() {
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     let unsubscribeFromNewSnapshots = db
//       .collection("Chats")
//       .doc("myfirst")
//       .onSnapshot((snapshot) => {
//         console.log("New Snapshot!");
//         setMessages(snapshot.data().messages);
//       });

//     return function cleanupBeforeUnmounting() {
//       unsubscribeFromNewSnapshots();
//     };
//   }, []);

//   const onSend = useCallback((messages = []) => {
//     db.collection("Chats")
//       .doc("myfirst")
//       .update({
//         messages: firebase.firestore.FieldValue.arrayUnion(messages[0]),
        
//       });
//     setMessages((previousMessages) =>
//       GiftedChat.append(previousMessages, messages)
//     );
//   }, []);

//   return (
//     <GiftedChat
//       messages = {messages}
//       onSend = {(messages) => onSend(messages )}
//       user = {{
//         _id: 1,
//         name: "Ana",
//         avatar: "https://placeimg.com/140/140/any",
//       }}
//       inverted = {true}
//       showUserAvatar = {true}
//       renderUsernameOnMessage = {true}
//       showAvatarForEveryMessage = {true}
//     />
//   );
// }
/********* */
// export default firebase;
// import React, { useState, useCallback, useEffect } from 'react';
// import { GiftedChat } from 'react-native-gifted-chat';
// import db from "./firebase";
// import firebase from "firebase/app";

// export default function App() {
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     let unsubscribeFromNewSnapshots = db
//     db.collection("Chats")
//       .doc("myfirstchat")
//       // .get()
//       .onSnapshot((snapshot) => {
//         console.log("New Snapshot");
//         // console.log(snapshot.id);
//         // console.log(snapshot.data());
//         setMessages(snapshot.data().messages)
//       });

//       return function cleanupBeforeUnmounting(){
//         unsubscribeFromNewSnapshots();
//       };
//   }, []);

//   // const onSend = useCallback((messages = []) => {
//   //   //let myarray = user;
//   //   console.log(messages);
//   //   db.collection("Chats").doc("myfirstchat").update({ messages : firebase.firestore.FieldValue.arrayUnion(messages[0]),});
//   //   setMessages((previousMessages) => 
//   //     GiftedChat.append(previousMessages, messages)
//   //     );
//   // }, []);
//   const onSend = useCallback((messages = []) => {
//     db.collection("Chats")
//       .doc("myfirstchat")
//       .update({
//         messages: firebase.firestore.FieldValue.arrayUnion(messages[0]),
//       });
//     setMessages((previousMessages) =>
//       GiftedChat.append(previousMessages, messages)
//     );
//   }, []);
  
//   return ( <GiftedChat
//       messages={messages}
//       onSend={(messages) => onSend(messages)}
//       user={{
//         _id: "1",
//         name: "Ana",
//         avatar : "https://placeimg.com/140/140/any",
        
//       }}
//       inverted = {true}
//       showUserAvatar = {true}
//       renderUsernameOnMessage = {true}
//       // showAvatarForEveryMessage = {true}
//     />
//   );
//   console.log(GiftedChat);
// }
/***************************** *******************************/
  // useEffect(() => {
  //   setMessages([
  //     {
  //       _id: 1,
  //       text: 'Hello developer',
  //       createdAt: new Date(),
  //       user: {
  //         _id: 2,
  //         name: "Robot",
  //         avatar: 'https://placeimg.com/140/140/any',
  //       },
  //     },
  //     {
  //       _id: 2,
  //       text: 'Hello',
  //       createdAt: new Date(),
  //       user: {
  //         _id: 1,
  //         name: "Robot",
  //         avatar: 'https://placeimg.com/140/140/any',
  //       },
  //     },
  //   ])
  // }, [])

/*********************************************************/

// import { StatusBar } from 'expo-status-bar';
// // import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import React, { useState, useCallback, useEffect } from 'react'
// import { GiftedChat } from 'react-native-gifted-chat'

// export default function App() {
//   const [messages, setMessages] = useState([]);
//   // return (
//   //   <View style={styles.container}>
//   //     <Text>Open up App.js to start working on your app!</Text>
//   //     <StatusBar style="auto" />
//   //   </View>
//   // );
//   useEffect(() => {
//     setMessages([
//       {
//         _id: 1,
//         text: 'Hello developer',
//         createdAt: new Date(),
//         user: {
//           _id: 2,
//           name: 'React Native',
//           avatar: 'https://placeimg.com/140/140/any',
//         },
//       },
//     ])
//   }, [])


// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });
// // export function Example() {
// //   const [messages, setMessages] = useState([]);

//   // useEffect(() => {
//   //   setMessages([
//   //     {
//   //       _id: 1,
//   //       text: 'Hello developer',
//   //       createdAt: new Date(),
//   //       user: {
//   //         _id: 2,
//   //         name: 'React Native',
//   //         avatar: 'https://placeimg.com/140/140/any',
//   //       },
//   //     },
//   //   ])
//   // }, [])

//   const onSend = useCallback((messages = []) => {
//     setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
//   }, [])

//   return (
//     <GiftedChat
//       messages={messages}
//       onSend={messages => onSend(messages)}
//       user={{
//         _id: 1,
//       }}
//     />
//   )
// }
// }