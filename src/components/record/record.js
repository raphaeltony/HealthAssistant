import React from "react";
import { View, Text } from "native-base";
import RecordStyle from "./styles";

const Record = props => {
  const { align, color, text } = props;
  let styles = RecordStyle.getSheet(align, color);

  return (
    <View padder>
      <View style={styles.record}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

export default Record;
