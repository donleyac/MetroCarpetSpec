import React from 'react';
import './styles.scss';

export function BackgroundImg(props) {
    let width = props.width?props.width:"100%";
    let addedStyle={
      backgroundImage: 'url(' + props.image + ')',
    };
    addedStyle['width']=width;
    if(props.height){
      addedStyle['height']=props.height;
    }
    let className ="background-img ";
    className+= props.class?props.class:"";
    return (
    <div className={className} style={addedStyle}>
      {props.children}
    </div>
    )
  }

