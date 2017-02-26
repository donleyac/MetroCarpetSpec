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
          <h2 className="emerg">24 Hr. Emergency Flood</h2>
          <p className="emerg">877-687-5730</p>
          <a href="#" className="icon" title="Facebook">
            <svg viewBox="0 0 512 512">
            <path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"/>
          </svg></a>
          <a href="#" className="icon" title="GooglePlus">
            <svg viewBox="0 0 512 512"><path d="M179.7 237.6L179.7 284.2 256.7 284.2C253.6 304.2 233.4 342.9 179.7 342.9 133.4 342.9 95.6 304.4 95.6 257 95.6 209.6 133.4 171.1 179.7 171.1 206.1 171.1 223.7 182.4 233.8 192.1L270.6 156.6C247 134.4 216.4 121 179.7 121 104.7 121 44 181.8 44 257 44 332.2 104.7 393 179.7 393 258 393 310 337.8 310 260.1 310 251.2 309 244.4 307.9 237.6L179.7 237.6 179.7 237.6ZM468 236.7L429.3 236.7 429.3 198 390.7 198 390.7 236.7 352 236.7 352 275.3 390.7 275.3 390.7 314 429.3 314 429.3 275.3 468 275.3"/>
          </svg></a>
          <a href="#" className="icon" title="Yelp">
            <svg viewBox="0 0 512 512"><path d="M284.1 298.4c-6.1 6.1-0.9 17.3-0.9 17.3l45.8 76.4c0 0 7.5 10.1 14 10.1 6.5 0 13-5.4 13-5.4l36.2-51.7c0 0 3.6-6.5 3.7-12.2 0.1-8.1-12.1-10.4-12.1-10.4l-85.7-27.5C298.1 294.9 289.7 292.7 284.1 298.4L284.1 298.4zM279.7 259.8c4.4 7.4 16.5 5.3 16.5 5.3l85.5-25c0 0 11.6-4.7 13.3-11.1 1.6-6.3-1.9-13.9-1.9-13.9L352.2 167c0 0-3.5-6.1-10.9-6.7 -8.1-0.7-13.1 9.1-13.1 9.1l-48.3 76C280 245.4 275.7 253 279.7 259.8L279.7 259.8zM239.4 230.2c10.1-2.5 11.7-17.1 11.7-17.1l-0.7-121.7c0 0-1.5-15-8.3-19.1 -10.6-6.4-13.7-3.1-16.7-2.6l-71 26.4c0 0-6.9 2.3-10.6 8.1 -5.2 8.2 5.3 20.2 5.3 20.2L222.8 225C222.8 225 230.1 232.5 239.4 230.2L239.4 230.2zM221.8 279.5c0.3-9.4-11.3-15-11.3-15l-76.3-38.5c0 0-11.3-4.7-16.8-1.4 -4.2 2.5-7.9 7-8.3 11l-5 61.2c0 0-0.7 10.6 2 15.4 3.9 6.8 16.7 2.1 16.7 2.1l89.1-19.7C215.4 292.1 221.5 291.9 221.8 279.5L221.8 279.5zM244 312.5c-7.6-3.9-16.8 4.2-16.8 4.2l-59.6 65.6c0 0-7.4 10-5.5 16.2 1.8 5.8 4.7 8.6 8.9 10.7l59.9 18.9c0 0 7.3 1.5 12.8-0.1 7.8-2.3 6.4-14.5 6.4-14.5l1.4-88.9C251.3 324.6 251 316.1 244 312.5L244 312.5zM244 312.5"/>
          </svg></a>
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
