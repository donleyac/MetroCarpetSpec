import React from 'react';
import {Link} from 'react-router';
import BackgroundImage from '../../components/BackgroundImg/index.js';
import CarouselClick from '../../components/CarouselClick/index.js';
import Companies from '../../components/Companies/index.js';
import './styles.scss'

export default function(props){
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

    var review_slides = [
    {background: require('../../components/Slides/assets/rightward/dog.png'),
    detail: (
      <div className="half left">
        <ul>
          <li>45,000+ units renovated since 1998 </li>
          <li>Experienced professionals who understand the unique requirements of working in multi-housing </li>
          <li>Skilled, efficient and dependable subcontractors </li>
          <li>Processes tailored specifically to multi-housing renovations </li>
        </ul>
      </div>)},
    {background: require('../../components/Slides/assets/rightward/family.png'),
    detail: (
      <div className="half left">
        <ul>
          <li>45,000+ units renovated since 1998 </li>
          <li>Experienced professionals who understand the unique requirements of working in multi-housing </li>
          <li>Skilled, efficient and dependable subcontractors </li>
          <li>Processes tailored specifically to multi-housing renovations </li>
        </ul>
      </div>)}];
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
    <CarouselClick slides={review_slides}></CarouselClick>
    <h1>Christos Companies</h1>
    <Companies />
  </div>
  )
}
