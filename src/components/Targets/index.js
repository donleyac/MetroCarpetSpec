import React from 'react';
import classNames from 'classnames';
import './styles.scss';

function Targets(props){
    var indexCarousel = props.activeIndex;
    var directionCarousel = props.direction;
    return (
      //REMOVE col-sm-3 ON HORIZONTAL
      <div className="row targets">
        { props.slides.map(function(image, index){
          var targetClasses = classNames ({
            'last': index===props.slides.length-1,
            'activeClass': index===indexCarousel,
            'box': true
          });
          return (
            <div onClick={() => props.onClick(index)} className={targetClasses}>
              {image.service}
            </div>)
        },this)}
      </div>
    )
  }
module.exports = Targets;
