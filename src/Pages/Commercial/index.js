import React from 'react';
import {Link} from 'react-router';
import {DivideContent} from '../../components/DivideContent/index';
import {BackgroundImg} from '../../components/BackgroundImg/index';
import './styles.scss'

export default function(props){
  let background = require('./assets/washingtondc.jpg');
  return (
    <div className="commercial">
    <BackgroundImg width="100%" image={background}>
        <h1 className="slogan">We are proud to have served properties for many of the most respected and well-known names in the multi-housing industry since 1995.
        Recently we have completed work for the following: </h1>
        <DivideContent
          bootLvl="sm" className="list" chunkSize={[4,4,3]} list={[
            "Bozzuto Management",
            "Dittmar",
            "Franklin Johnston",
            "JBG Smith",
            "Lane Company",
            "Lerner",
            "Paradigm",
            "Polinger",
            "UDR",
            "Van Metre"
         ]} />
    </BackgroundImg>
    </div>
  )
}
