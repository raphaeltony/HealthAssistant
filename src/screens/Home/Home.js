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

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hey there!"
    };
  }

  handleQuery = () => {
    console.log("Button pressed");
  };
  render() {
    return (
      <Container>
        <Header style={{ flexDirection: "column", backgroundColor: "#66b9bf" }}>
          <Title style={{ fontSize: 22 }}>Welcome</Title>
        </Header>

        <Content padder style={{ flex: 1 }}>
          <Record text={this.state.text} align="flex-start" />
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
            <Input placeholder="How are you today ?" />
          </Item>
          <Button transparent onPress={this.handleQuery}>
            <Icon name="medkit" style={{ fontSize: 32, color: "red" }} />
          </Button>
        </Footer>
      </Container>
    );
  }
}
