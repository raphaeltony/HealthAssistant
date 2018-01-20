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
  Textarea
} from "native-base";
import Record from "../../components/record/record";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header style={{ flexDirection: "column" }}>
          <Title>Welcome</Title>
        </Header>

        <Content padder style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <Item rounded style={{ flex: 1 }}>
              <Input placeholder="How are you today ?" />
            </Item>
            <Button transparent>
              <Icon name="medkit" style={{ fontSize: 32, color: "red" }} />
            </Button>
          </View>

          <Record align="flex-end" />
          <Record />
          <Record align="flex-end" />
        </Content>
      </Container>
    );
  }
}
