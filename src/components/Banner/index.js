import React from 'react';
import './styles.scss';

export default function(props) {
    let addedStyle={
      backgroundImage: 'url(' + props.image + ')',
    };
    if(props.banner){
      addedStyle['width'] = '100%';
    }
    if(props.height){
      addedStyle['height'] = props.height;
    }
    let className ="background-img ";
    className+= props.class?props.class:"";
    return (
    <div className={className} style={addedStyle}>
      {props.children}
    </div>
    )
  }

module.exports = BackgroundImg;
