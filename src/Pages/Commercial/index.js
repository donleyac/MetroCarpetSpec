import React from 'react';
import {Link} from 'react-router';
import {DivideContent} from '../../components/DivideContent/index';
import {BackgroundImg} from '../../components/BackgroundImg/index';
import './styles.scss'

export default function(props){
  let background = require('./assets/skyline_stock.jpg');
  return (
    <div className="commercial">
    <BackgroundImg width="70%" image={background}>
        <h1 className="slogan">Serving the multi-housing community since 1995..here are some of the commercial properties we’ve serviced. </h1>
        <DivideContent
          bootLvl="sm" className="list" chunk={3} list={[
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
