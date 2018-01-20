import React, { Component } from "react";
import {
  Container,
  Header,
  Body,
  Title,
  Text,
  Item,
  Icon,
  Input,
  View,
  Button,
  Left,
  Right,
  Content,
  Footer
} from "native-base";
import Record from "../../components/record/record";
import { FlatList } from "react-native";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hey there!",
      data: [{ text: "Hey there!", align: "flex-start" }]
    };
  }

  handleQuery = () => {
    console.log("Button pressed");
    this.setState({ data: this.state.data.concat({ text: this.state.text }) });
  };
  render() {
    return (
      <Container>
        <Header style={{ flexDirection: "column", backgroundColor: "#66b9bf" }}>
          <Title style={{ fontSize: 22 }}>Welcome</Title>
        </Header>

        <Content padder style={{ flex: 1 }}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <Record text={item.text} align={item.align} />
            )}
            keyExtractor={item => item.text}
          />
        </Content>

        <Footer
          style={{
            flexDirection: "row",
            height: 60,
            padding: 5,
            backgroundColor: "#66b9bf"
          }}
        >
          <Item style={{ flex: 1 }}>
            <Input
              placeholder="How are you today ?"
              onChangeText={text => this.setState({ text })}
            />
          </Item>
          <Button transparent onPress={this.handleQuery}>
            <Icon name="medkit" style={{ fontSize: 32, color: "red" }} />
          </Button>
        </Footer>
      </Container>
    );
  }
}
