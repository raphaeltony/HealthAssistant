import React from "react";
import { StyleSheet } from "react-native";

export default class RecordStyle {
  static getSheet = (alignment = "flex-end") => {
    let color = "#e37222";

    if (alignment === "flex-start") color = "#07889b";
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
