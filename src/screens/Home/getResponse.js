import React from "react";
import { Toast } from "native-base";

export default class GetRes {
  static getResponse = text => {
    fetch("https://api.beady27.hasura-app.io/wit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Input: text
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        return responseJson.Response;
      })

      .catch(error => {
        console.error(error);
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
}
