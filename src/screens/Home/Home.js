import React, { Component } from "react";
import {
  Container,
  Header,
  Body,
  Title,
  Item,
  Icon,
  Input,
  View,
  Button,
  Left,
  Right,
  Content
} from "native-base";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header searchBar rounded style={{ flexDirection: "column" }}>
          <Title>Welcome</Title>
        </Header>

        <Content style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", flex: 1, margin: 10 }}>
            <Item rounded style={{ flex: 1 }}>
              <Input placeholder="How are you today ?" />
            </Item>
            <Button transparent>
              <Icon name="medkit" style={{ fontSize: 32, color: "red" }} />
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
