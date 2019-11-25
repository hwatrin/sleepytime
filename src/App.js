import React from "react";
import "./App.css";

import Bootstrap from "./components/config/Bootstrap";

import Header from "./components/Header";
import BootstrapBottom from "./components/config/BootstrapBottom";
import Selector from "./components/Forms/Selector";
import Slider from "./components/Forms/Slider";
import Results from "./components/Results";

class App extends React.Component {
  state = {
    selected: 0,
    slider: 0,
  };

  updateSelected = selected => {
    this.setState({ selected });
  };

  componentDidUpdate = () => console.log(this.state.slider);

  updateSlider = slider => this.setState({slider});

  render = () => {
    return (
      <div className="App">
        <div className="container">
          <header>
            <Bootstrap />
            <Header />
          </header>
          <div style={{ marginLeft: 40 }}>
            <Selector updateSelected={this.updateSelected.bind(this)} />
            <Slider updateSlider = {this.updateSlider.bind(this)}/>
            <Results selected={this.state.selected} slider = {this.state.slider}/>
          </div>
          <BootstrapBottom />
        </div>
      </div>
    );
  };
}

export default App;
