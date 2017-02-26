import React from 'react';
import {Link} from 'react-router';
import BackgroundImage from '../../components/BackgroundImg/index.js';
import CarouselClick from '../../components/CarouselClick/index.js';
import './styles.scss'

export default function(props){
  return(
    <div className="companies row-items">
      <a href="http://christosbuildingservices.com/">
        <img src={require('./assets/cbs.jpg')}/>
        <p>Christos Building Services</p>
      </a>
      <a href="http://usvending.com/">
        <img src={require('./assets/usvending.jpg')} />
        <p>US Vending</p>
      </a>
      <a href="http://paramountserv.com/#/">
        <img src={require('./assets/paramount.jpg')} />
        <p>Paramount Services</p>
      </a>
      <a href="http://www.cabinetcraftusa.com">
        <img src={require('./assets/cabinet.jpg')} />
        <p>Cabinet Craft</p>
      </a>
      <a href="http://www.sarantisproperties.com">
        <img src={require('./assets/sarantis_logo.png')}/>
        <p>Sarantis Properties</p>
      </a>
    </div>
  )
}
