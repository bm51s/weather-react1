import React from "react";

export default class WeatherWidget extends React.Component {
  render() {
    let prop_json = this.props.weath;
    // console.log("resp1: " + this.state.response);
    let sunrise = new Date(prop_json.sys.sunrise * 1000).toString();
    let sunset = new Date(prop_json.sys.sunset * 1000).toString();
    // let { info } = this.state.response;
    return (
      <>
        <div>city: {prop_json.name}</div>
        <div>weather: {prop_json.weather[0].description}</div>
        <div>temp: {prop_json.main.temp}</div>
        <div>temp_min: {prop_json.main.temp_min}</div>
        <div>temp_max: {prop_json.main.temp_max}</div>
        <div>pressure: {prop_json.main.pressure}</div>
        <div>wind: {prop_json.wind.speed}</div>
        <div>wind_deg: {prop_json.wind.deg}</div>
        <div>clouds: {prop_json.clouds.all}</div>
        <div>city: {sunrise}</div>
        <div>city: {sunset}</div>
      </>
    );
  }
}
