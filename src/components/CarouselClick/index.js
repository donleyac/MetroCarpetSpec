import React from 'react';
import {Link} from 'react-router';
import Targets from '../Targets/index';
import Slides from '../Slides/index';

const CarouselClick = React.createClass({
  getInitialState() {
    return {
      index: 0
    };
  },
  handleSelect(input) {
    //Given a direction
    if(typeof input === 'string'){
      let direction = input;
      if (direction==="left") {
        var selectedIndex = this.state.index-1;
      }
      else if(direction ==="right") {
        var selectedIndex = this.state.index+1;
      }
      else {
        var selectedIndex = 0;
      }
    }
    //Given a specific index
    else {
      var selectedIndex = input;
    }
    this.resetTimer();
    if(selectedIndex>=this.props.slides.length){
      selectedIndex = 0;
    }
    if(selectedIndex<0){
      selectedIndex = this.props.slides.length-1;
    }
    this.setState({
      index: selectedIndex
    });

  },
  resetTimer(){
    clearInterval(this.state.intervalId);
    let intervalId = setInterval(()=>this.handleSelect(this.state.index+1), 7000);
    this.setState({intervalId: intervalId});
  },
  componentDidMount() {
    let intervalId = setInterval(()=>this.handleSelect(this.state.index+1), 7000);
    this.setState({intervalId: intervalId});
  },
  componentWillUnmount(){
    clearInterval(this.state.intervalId);
  },
  render() {
    let carouselClass="carousel-container" + (this.props.animateSlide?" animateSlide":"");
    return (
      <div className={carouselClass}>
        <Targets activeIndex={this.state.index} direction={this.state.direction}
          onClick={this.handleSelect} slides={this.props.slides}></Targets>
        <Slides activeIndex={this.state.index} onClick={this.handleSelect}
          slides={this.props.slides}
          animateSlide={this.props.animateSlide?this.props.animateSlide:undefined}>
        </Slides>
      </div>
    );
  }
});

module.exports = CarouselClick;
