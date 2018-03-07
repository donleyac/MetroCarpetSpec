import React from 'react';
import {Link} from 'react-router';
import {BackgroundImg} from '../../components/BackgroundImg/index.js';
import CarouselClick from '../../components/CarouselClick/index.js';
import Companies from '../../components/Companies/index.js';
import './styles.scss'

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  contactClick() {
    var contactform = document.getElementById("contact-form");
    contactform.classList ? contactform.classList.toggle('open') : contactform.className += ' open';
  }
    render() {
    var slides = [
    {service: (<p>Cleaning</p>),
    icon: require('../../components/Targets/assets/icon-cleaning.png'),
    background: require('../../components/Slides/assets/leftward/cleaning.png'),
    detail: (
      <div className="half right">
        <ul>
          <li>45,000+ units renovated since 1998 </li>
          <li>Experienced professionals who understand the unique requirements of working in multi-housing </li>
          <li>Skilled, efficient and dependable subcontractors </li>
          <li>Processes tailored specifically to multi-housing renovations </li>
        </ul>
      </div>)},
    {service: (<p>Restoration</p>),
    icon: require('../../components/Targets/assets/icon-restoration.png'),
    background: require('../../components/Slides/assets/leftward/restoration.png'),
    detail: (
      <div className="half right">
        <ul>
          <li>45,000+ units renovated since 1998 </li>
          <li>Experienced professionals who understand the unique requirements of working in multi-housing </li>
          <li>Skilled, efficient and dependable subcontractors </li>
          <li>Processes tailored specifically to multi-housing renovations </li>
        </ul>
      </div>)},
    {service: (<p>Flood Services</p>),
    icon: require('../../components/Targets/assets/icon-flood.png'),
    background: require('../../components/Slides/assets/leftward/flood.png'),
    detail: (
      <div className="half right">
        <ul>
          <li>45,000+ units renovated since 1998 </li>
          <li>Experienced professionals who understand the unique requirements of working in multi-housing </li>
          <li>Skilled, efficient and dependable subcontractors </li>
          <li>Processes tailored specifically to multi-housing renovations </li>
        </ul>
      </div>)},
    {service: (<p>Power Washing</p>),
    icon: require('../../components/Targets/assets/icon-pw.png'),
    background: require('../../components/Slides/assets/leftward/power.png'),
    detail: (
      <div className="half right">
        <ul>
          <li>45,000+ units renovated since 1998 </li>
          <li>Experienced professionals who understand the unique requirements of working in multi-housing </li>
          <li>Skilled, efficient and dependable subcontractors </li>
          <li>Processes tailored specifically to multi-housing renovations </li>
        </ul>
      </div>)}];
    return (
      <div className="home page">
        <BackgroundImg image={require('./assets/home_carpet.jpg')} banner height="80vh">
          <h1>Renew Your Look</h1>
          <p>With Metropolitian Carpet Specialists</p>
          <a onClick={this.contactClick} className="rnd-btn">Contact Us</a>
        </BackgroundImg>
        <h1>Our Services</h1>
        <CarouselClick targets slides={slides}></CarouselClick>
      <h1>Christos Companies</h1>
      <Companies />
    </div>
    )
  }
}
export default Home;
