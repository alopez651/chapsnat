import { Ionicons } from "@expo/vector-icons";
import * as React from "react";

import Colors from "../constants/Colors";

export default function TabBarIcon(props) {
  return (
    <Ionicons
      name={props.name}
      size={30}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}

//condition ? optionA : optionB 

//if the condition is true, then do optionA, otherwise, do option B 
/**
 * if(condition)
 */