import React from 'react';
import {Link} from 'react-router';
import BackgroundImage from '../../components/BackgroundImg/index.js';
import CarouselClick from '../../components/CarouselClick/index.js';
import './styles.scss'

export default function(props){
  var slides = [
  {service: (<p>Cleaning</p>),
  icon: require('../../components/Targets/assets/icon-cleaning.png'),
  background: require('./assets/home_carpet.jpg'),
  detail: (
  <ul>
    <li>45,000+ units renovated since 1998 </li>
    <li>Experienced professionals who understand the unique requirements of working in multi-housing </li>
    <li>Skilled, efficient and dependable subcontractors </li>
    <li>Processes tailored specifically to multi-housing renovations </li>
  </ul>)},
  {service: (<p>Restoration</p>),
  icon: require('../../components/Targets/assets/icon-restoration.png'),
  background: require('./assets/home_carpet.jpg'),
  detail: (
  <ul>
    <li>A dedicated team of managers and crews committed to your satisfaction </li>
    <li>Most work performed by Paramount employees </li>
    <li>Project Managers who inspect every unit before you do </li>
  </ul>)},
  {service: (<p>Flood Services</p>),
  icon: require('../../components/Targets/assets/icon-flood.png'),
  background: require('./assets/home_carpet.jpg'),
  detail: (
  <ul>
    <li>A network of strategically located, fully stocked warehouses </li>
    <li>In-house cabinet and counter-top manufacturing </li>
    <li>Strong relationships with all leading multi-housing vendors </li>
    <li>Our unique "On-Time Completion Guarantee" or we pay the rent </li>
  </ul>)},
  {service: (<p>Power Washing</p>),
  icon: require('../../components/Targets/assets/icon-pw.png'),
  background: require('./assets/home_carpet.jpg'),
  detail: (
  <ul>
    <li>Economies of scale</li>
    <li>Leveraged buying power</li>
    <li>The financial strength to tackle your largest projects</li>
  </ul>)}];
  return (
    <div className="home page">
      <BackgroundImage image={require('./assets/home_carpet.jpg')} banner height="80vh">
        <h1>Renew Your Look</h1>
        <p>With Metropolitian Carpet Specialists</p>
        <Link className="rnd-btn">Contact Us</Link>
      </BackgroundImage>
      <h1>Our Services</h1>
      <CarouselClick targets slides={slides}></CarouselClick>
      <h1>Why Metropolitian Carpet Specialists?</h1>
      <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nullam in imperdiet lorem. Aliquam aliquam justo tempor est tristique,
        et vehicula ante egestas. Suspendisse at urna volutpat, condimentum nunc
        non, feugiat nulla. Suspendisse viverra maximus ultricies. Cras sagittis
        nisi vel magna tempor euismod. Aliquam est arcu, pretium in dapibus sed,
        tincidunt sed magna. Morbi pharetra nisl vel erat mollis, vitae
        malesuada orci molestie.</p>
    <CarouselClick slides={slides}></CarouselClick>
    <h1>Christos Companies</h1>
    <div className="row-items">
      <div>
        <img src="http://placehold.it/250x250" />
        <p>Christos Building Services</p>
      </div>
      <div>
        <img src="http://placehold.it/250x250" />
        <p>US Vending</p>
      </div>
      <div>
        <img src="http://placehold.it/250x250" />
        <p>Paramount Services</p>
      </div>
      <div>
        <img src="http://placehold.it/250x250" />
        <p>Cabinet Craft</p>
      </div>
      <div>
        <img src="http://placehold.it/250x250" />
        <p>Sarantis Properties</p>
      </div>
    </div>
  </div>
  )
}
