import React from "react";
import Label from "../components/Label";

const text =
  "Drag the slider to see the effects of this sleep level over time.";

class Slider extends React.Component {
    state = {
        selected: 5,
        duration: '1 Day'
    }
    value = this.state.selected;

    componentDidMount = () => this.props.updateSlider(this.state.duration);

    componentDidUpdate = () => {
    }
    

    handleChange = (event) => {
        const {value:selected} = event.target;
        this.setState({
            selected
        }, () => {
          const {selected, duration} = this.state;
      if(selected < 15){
        if(duration !== '1 Day')
          this.setState({duration: '1 Day'}, () => this.props.updateSlider(this.state.duration))
      }else if (selected < 30){
        if(duration !== '2 Days')
          this.setState({ duration: '3 Days'}, () => this.props.updateSlider(this.state.duration))
      }else if (selected < 45){
        if(duration !== '1 Week')
          this.setState({ duration: '1 Week'}, () => this.props.updateSlider(this.state.duration));
      }else if (selected < 60){
        if(duration !== '2 Weeks')
          this.setState({duration: '2 Weeks'}, () => this.props.updateSlider(this.state.duration));
      }else if (selected < 75){
        if(duration !== '1 Month')
          this.setState({duration: '1 Month'}, () => this.props.updateSlider(this.state.duration));
      }else if (selected < 90){
        if(duration !== '1 Year')
          this.setState({duration: '1 Year'}, () => this.props.updateSlider(this.state.duration));
      }else{
        if(duration !== 'A life time')
         this.setState({duration: 'A life time'}, () => this.props.updateSlider(this.state.duration));
      }
        });
    }

  render = () => (
    <>
      <Label text={text} />


      <div className="form-group slidercontainer" style = {{marginTop: 80}}>
        <label style = {{alignSelf: 'flex-start', color: '#fff'}} for = "myRange">{this.state.duration}</label>
          <input
            type="range"
            min="1"
            max="100"
            value={this.state.selected}
            onChange = {this.handleChange.bind(this)}
            className="slider"
            id="myRange"
          />
      </div>
    </>
  );
}

export default Slider;
