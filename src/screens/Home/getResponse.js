import React from "react";
import { Toast } from "native-base";
import axios from "axios";

export default class GetRes {
  constructor() {
    this.res = "";
  }

  static sendMess = (text, callback) => {
    axios
      .post("https://api.beady27.hasura-app.io/wit", {
        Input: text
      })
      .then(response => {
        console.log(response.data.Response);
        this.res = response.data.Response;
        callback(this.res);
      })
      .catch(function(error) {
        console.log(error);
        {
          /*Toast.show({
        text: "Looks like you're not connected to the internet",
        position: "bottom",
        buttonText: "Okay",
        type: "warning",
        duration: 4000
      });*/
        }
      });
  };

  static getRes = () => this.res;
}
