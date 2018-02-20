import React, { Component } from "react";
import { Container, Header, Body, Title, Icon, Left, Right } from "native-base";
import { StatusBar, NetInfo } from "react-native";
import MessageText from "../../components/MessageText";
import Bubble from "../../components/Bubble";
import InputToolbar from "../../components/InputToolbar";
import { GiftedChat } from "../../components/GiftedChat";
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
    this.setState(previousState => {
      return {
        id: previousState.id + 1,
        data: GiftedChat.append(previousState.data, messages)
      };
    });
    this.sendMess(messages);
  };

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "#5e5d5a" }}>
          <Title style={{ fontSize: 22, alignSelf: "center" }}>
            Health Assistant
          </Title>
        </Header>
        <GiftedChat
          messages={this.state.data}
          onSend={messages => this.handleQuery(messages)}
          user={{
            _id: 2
          }}
          minInputToolbarHeight={60}
          renderMessageText={this.renderMessageText}
          renderBubble={this.renderBubble}
          renderInputToolbar={this.renderInputToolbar}
        />
      </Container>
    );
  }

  sendMess = messages => {
    NetInfo.isConnected.fetch().then(isConnected => {
      if (isConnected) {
        console.log("Internet is connected");
        axios
          .post("https://api.beady27.hasura-app.io/wit", {
            Input: messages["0"].text
          })
          .then(response => {
            this.setState(previousState => {
              return {
                id: previousState.id + 1,
                data: GiftedChat.append(previousState.data, {
                  _id: this.state.id,
                  text: response.data.Response,
                  createdAt: new Date(),
                  user: {
                    _id: 1
                  }
                })
              };
            });
          })
          .catch(error => {
            console.log(error);
            if (error.response.status >= 500) {
              this.setState(previousState => {
                return {
                  id: this.state.id + 1,
                  data: GiftedChat.append(this.state.data, {
                    _id: this.state.id,
                    text: "Something went wrong in the backend. Sorry !",
                    createdAt: new Date(),
                    user: {
                      _id: 1
                    }
                  })
                };
              });
            }
          });
      } else {
        this.setState(previousState => {
          return {
            id: this.state.id + 1,
            data: GiftedChat.append(this.state.data, {
              _id: this.state.id,
              text: "Looks like you're not connected to the internet",
              createdAt: new Date(),
              user: {
                _id: 1
              }
            })
          };
        });
      }
    });
  };

  renderMessageText(props) {
    return <MessageText {...props} />;
  }
  renderBubble(props) {
    return <Bubble {...props} />;
  }
  renderInputToolbar(props) {
    return <InputToolbar {...props} />;
  }
}
