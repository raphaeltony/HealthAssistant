import React from "react";
import { View, Text } from "native-base";
import RecordStyle from "./styles";

const Record = props => {
  const { align } = props;
  let styles = RecordStyle.getSheet(align);

  return (
    <View padder>
      <View style={styles.record}>
        <Text>
          Sample Record Hey there I'm typing a lot !!!!!! Whastapp Ok Ill try .
          Yeah !!
        </Text>
        <Text>Sample Record2</Text>
      </View>
    </View>
  );
};

export default Record;
