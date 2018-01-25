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
import { FlatList, StatusBar } from "react-native";
import GetRes from "./getResponse";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      data: [{ text: "Hey there!", align: "flex-start" }],
      btnDisabled: false
    };
  }

  handleQuery = () => {
    console.log("Button pressed");
    this.setState({
      data: this.state.data.concat({ text: this.state.text }),
      btnEnabled: false
    });

    {
      /* Send request, fetch response, Push response to data array*/
    }
    this.setState({
      data: this.state.data.concat({
        text: GetRes.getResponse(this.state.text),
        align: "flex-start"
      })
    });

    this.setState({ text: "", btnEnabled: true });
  };

  render() {
    return (
      <Container>
        <StatusBar transparent={false} barStyle="light-content" />
        <Header style={{ flexDirection: "column", backgroundColor: "#063852" }}>
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
            backgroundColor: "white"
          }}
        >
          <Item style={{ flex: 1 }}>
            <Input
              placeholder="How are you today ?"
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
            />
          </Item>
          <Button
            transparent
            onPress={this.handleQuery}
            disabled={this.state.btnDisabled}
          >
            <Icon name="medkit" style={{ fontSize: 32, color: "red" }} />
          </Button>
        </Footer>
      </Container>
    );
  }
}
