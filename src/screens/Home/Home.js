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
  Footer,
  Spinner
} from "native-base";
import Record from "../../components/record/record";
import { FlatList, StatusBar } from "react-native";
import axios from "axios";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      data: [{ text: "Hey there!", align: "flex-start" }],
      animating: false
    };
  }

  handleQuery = () => {
    if (this.state.text !== "") {
      this.setState({
        data: this.state.data.concat({ text: this.state.text }),
        animating: true
      });
      this.sendMess(this.state.text);
    }
  };

  render() {
    return (
      <Container>
        <StatusBar backgroundColor="silver" barStyle="light-content" />
        <Header style={{ backgroundColor: "#5e5d5a" }}>
          <Left />
          <Body>
            <Title style={{ fontSize: 22 }}>Health Assistant</Title>
          </Body>

          <Spinner
            color="white"
            animating={this.state.animating}
            style={{ alignSelf: "center" }}
          />
        </Header>

        <Content padder style={{ flex: 1, backgroundColor: "#f0eff0" }}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <Record text={item.text} align={item.align} />
            )}
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
          <Button transparent onPress={this.handleQuery}>
            <Icon name="medkit" style={{ fontSize: 32, color: "red" }} />
          </Button>
        </Footer>
      </Container>
    );
  }

  sendMess = text => {
    axios
      .post("https://api.beady27.hasura-app.io/wit", {
        Input: text
      })
      .then(response => {
        this.setState({
          data: this.state.data.concat({
            text: response.data.Response,
            align: "flex-start"
          }),
          text: "",
          animating: false
        });
      })
      .catch(error => {
        this.setState({
          data: this.state.data.concat({
            text: "Looks like you're not connected to the internet",
            align: "flex-start"
          })
        });
      });
  };
}
