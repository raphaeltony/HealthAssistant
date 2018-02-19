import React, { Component } from "react";
import {
  Container,
  Header,
  Body,
  Title,
  Item,
  Icon,
  Input,
  Button,
  Left,
  Content,
  Footer,
  Spinner
} from "native-base";
import { StatusBar } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import axios from "axios";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      data: [
        {
          _id: 1,
          text: "Hey There",
          createdAt: new Date(),
          user: {
            _id: 1
          }
        }
      ]
    };
  }

  handleQuery = messages => {
    this.setState({
      id: this.state.id + 1,
      data: GiftedChat.append(this.state.data, messages)
    });
    this.sendMess(messages);
  };

  render() {
    return (
      <GiftedChat
        messages={this.state.data}
        onSend={messages => this.handleQuery(messages)}
        user={{
          _id: 2
        }}
      />
    );
  }

  sendMess = messages => {
    axios
      .post("https://api.beady27.hasura-app.io/wit", {
        Input: messages["0"].text
      })
      .then(response => {
        this.setState({
          id: this.state.id + 1,
          data: GiftedChat.append(this.state.data, {
            _id: this.state.id,
            text: response.data.Response,
            createdAt: new Date(),
            user: {
              _id: 1
            }
          })
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          id: this.state.id + 1,
          data: GiftedChat.append(this.state.data, {
            _id: this.state.id,
            text: "Something went wrong",
            createdAt: new Date(),
            user: {
              _id: 1
            }
          })
        });
      });
  };
}
