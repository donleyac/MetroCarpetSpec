import React from 'react';
import classNames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './styles.scss';

function Slides(props){

  return (
    <div className="slider">
    {props.slides.map(function(slide, index){
      var slideClasses = classNames ({
        'activeClass': index===props.activeIndex,
        'slide': true
      });
      let addedStyle = slide.background? { backgroundImage: 'url(' + slide.background + ')'}: {};
      return(
        <span>
          {index===props.activeIndex &&
          <ReactCSSTransitionGroup
            transitionName="background"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}>
            <div key={slide} className={slideClasses} style={addedStyle}>
              <div onClick={() => props.onClick("left")} className="arrow left">
                <i className="material-icons">keyboard_arrow_left</i>
              </div>
              <div className="caption">{slide.detail}</div>
              <div  onClick={() => props.onClick("right")} className="arrow right">
                <i className="material-icons">keyboard_arrow_right</i>
              </div>
            </div>
         </ReactCSSTransitionGroup>}
        </span>
      )
    })}
    </div>
  )
}
module.exports = Slides;
