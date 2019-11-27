import React from "react";
import data from "./data";

class Results extends React.Component {
  state = { hours: 1 };
  lastSelected = this.props.selected;

  componentDidUpdate = () => {
    const selected = this.props.selected;

    //prevent updating over and over again and crashing the program
    if ((this.lastSelected === selected)) {
      return;
    }else{
      this.lastSelected = selected;
    }

    if (selected <= 1) {
      this.setState({
        hours: 1
      });
      
    } else if (selected <= 4) {
      this.setState({
        hours: 4
      });
    } else if (selected <= 6) {
      this.setState({
        hours: 6
      });
    } else if (selected <= 7) {
      this.setState({
        hours: 7
      });
    } else if (selected <= 10) {
      this.setState({
        hours: 9
      });
    } else {
      this.setState({
        hours: 12
      });
    }
  };

  render = () => {
    const { selected, slider } = this.props;

    return (
      <div>
        <p className="results">{data[this.state.hours][slider]}</p>
      </div>
    );
  };
}

export default Results;
