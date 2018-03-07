import React from 'react';
import {IndexLink} from 'react-router';
import './styles.scss';

function ListLink(props){
  return (
    <IndexLink activeClassName="active" to={props.to}>
      {props.info}
    </IndexLink>
  )
}
export default function(props) {
    return (
      <nav className="navbar">
        <div className="top-nav">
          <div className="top-wrapper">
          <h2 className="office">Office</h2>
          <p className="office">703-964-3210</p>
          <h2 className="emerg">Emergency</h2>
          <p className="emerg">877-687-5730</p>
          </div>
        </div>
        <nav className="wrapper">
          <IndexLink to="/"><img className="logo" src={require('./assets/metro_logo.jpg')} /></IndexLink>
          <span className="overflow">
            <div className="overflow-btn" />
            <div className="overflow-content">
              <ListLink to="/commercial" info="Commercial"/>
              <ListLink to="/residential" info="Residential"/>
              <ListLink to="/pay" info="Pay&nbsp;Bill"/>
            </div>
          </span>
        </nav>
      </nav>
    )
}
