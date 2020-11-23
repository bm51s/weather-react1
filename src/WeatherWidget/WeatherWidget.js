import React from "react";

import AjaxRe from "./AjaxRe";

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Kyiv&units=metric&appid=5c84bd6294b249fa97ae3ca1c3ca0c4c";

export default class WeatherWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: false
    };
  }

  componentDidMount() {
    fetch(url)
      .then((res) => {
        console.log("res " + res);
        return res.json();
      })
      .then((data) => {
        console.log("data " + data);
        this.setState({
          response: data
        });
      })
      .catch(() => {
        console.log("error");
      });
  }

  render() {
    console.log("resp1: " + JSON.stringify(this.state.response));
    // let { info } = this.state.response;
    if (this.state.response) {
      return (
        <>
          <AjaxRe weath={this.state.response} />
        </>
      );
    } else {
      return <div style={{ color: "#000" }}>Loading...</div>;
    }
  }
}
