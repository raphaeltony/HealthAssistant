import React from "react";
import { StyleSheet } from "react-native";

export default class RecordStyle {
  static getSheet = alignment =>
    StyleSheet.create({
      record: {
        padding: 5,
        flex: 1,
        backgroundColor: "blue",
        width: 200,
        borderRadius: 10,
        alignSelf: alignment
      }
    });
}
