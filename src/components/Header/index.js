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
      <div>
        <nav className="navbar">
          <nav className="wrapper">
            <IndexLink to="/"><div className="logo"></div></IndexLink>
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
      {props.children}
    </div>
    )
}
