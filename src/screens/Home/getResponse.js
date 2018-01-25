import React from "react";

export default class GetRes {
  static getResponse(text) {
    return fetch("https://api.beady27.hasura-app.io/wit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: text
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        return responseJson.text;
      })
      .catch(error => {
        console.error(error);
      });
  }
}
