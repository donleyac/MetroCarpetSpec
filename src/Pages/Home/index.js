import React from 'react';
import {Link} from 'react-router';
import BackgroundImage from '../../components/BackgroundImg/index.js';
import CarouselClick from '../../components/CarouselClick/index.js';
import './styles.scss'

export default function(props){
  var slides = [
  {service: (<p>Experience</p>),
  size: "col-sm-3",
  background: require('./assets/home_carpet.jpg'),
  detail: (
  <ul>
    <li>45,000+ units renovated since 1998 </li>
    <li>Experienced professionals who understand the unique requirements of working in multi-housing </li>
    <li>Skilled, efficient and dependable subcontractors </li>
    <li>Processes tailored specifically to multi-housing renovations </li>
  </ul>)},
  {service: (<p>Quality</p>),
  size: "col-sm-3",
  background: require('./assets/home_carpet.jpg'),
  detail: (
  <ul>
    <li>A dedicated team of managers and crews committed to your satisfaction </li>
    <li>Most work performed by Paramount employees </li>
    <li>Project Managers who inspect every unit before you do </li>
  </ul>)},
  {service: (<p>Speed</p>),
  size: "col-sm-3",
  background: require('./assets/home_carpet.jpg'),
  detail: (
  <ul>
    <li>A network of strategically located, fully stocked warehouses </li>
    <li>In-house cabinet and counter-top manufacturing </li>
    <li>Strong relationships with all leading multi-housing vendors </li>
    <li>Our unique "On-Time Completion Guarantee" or we pay the rent </li>
  </ul>)},
  {service: (<p>Price</p>),
  size: "col-sm-3",
  background: require('./assets/home_carpet.jpg'),
  detail: (
  <ul>
    <li>Economies of scale</li>
    <li>Leveraged buying power</li>
    <li>The financial strength to tackle your largest projects</li>
  </ul>)}];
  return (
    <div className="home">
      <BackgroundImage image={require('./assets/home_carpet.jpg')} banner height="80vh">
        <h1>Renew Your Look</h1>
        <p>With Metropolitian Carpet Specialists</p>
        <Link className="rnd-btn">Contact Us</Link>
      </BackgroundImage>
      <CarouselClick slides={slides}></CarouselClick>
    </div>
  )
}
