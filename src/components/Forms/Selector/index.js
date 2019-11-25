import React from "react";
import Label from "../components/Label";

import "../../../App.css";

const text = "How many hours do you sleep a night?";

class Selector extends React.Component {
  state = {
    selected: 8
  };

  componentDidMount = () => {
    this.props.updateSelected(this.state.selected);
  };

  handleChange = event => {
    const { value: selected } = event.target;
    this.props.updateSelected(selected);
    this.setState({
      selected
    });
  };

  getSelected = () => {
    return this.state.selected;
  };

  render = () => (
    <div id="selector" style={{ marginTop: 50 }}>
      <Label text={text} />
      <div className="dropdown" onChange={this.handleChange.bind(this)}>
        <select value={this.state.selected}>
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
          <option value={12}>12+</option>
        </select>
      </div>
    </div>
  );
}

export default Selector;
