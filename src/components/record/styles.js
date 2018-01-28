import React from "react";
import { StyleSheet } from "react-native";

export default class RecordStyle {
  static getSheet = (alignment = "flex-end") => {
    let color = "#a09f98";

    if (alignment === "flex-start") color = "#e0b50b";
    return StyleSheet.create({
      record: {
        padding: 10,
        flex: 1,
        backgroundColor: color,
        width: 200,
        borderRadius: 10,
        alignSelf: alignment
      },
      text: {
        color: "white",
        fontSize: 18
      }
    });
  };
}
