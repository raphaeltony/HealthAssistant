import React from "react";
import { View, Text } from "native-base";
import RecordStyle from "./styles";

const Record = props => {
  const { align, color } = props;
  let styles = RecordStyle.getSheet(align, color);

  return (
    <View padder>
      <View style={styles.record}>
        <Text style={styles.text}>
          Sample Record Hey there I'm typing a lot !!!!!! Whastapp Ok Ill try .
          Yeah !!
        </Text>
      </View>
    </View>
  );
};

export default Record;
