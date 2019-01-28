import React from 'react';
import {Link} from 'react-router';
import './styles.scss'


const PriceGroup = (props)=> {
  return (
    <div className="price-group">
      <h2>{props.header}</h2>
      <ul>
        {props.children}
      </ul>
    </div>
  );
}

const PriceRow = (props)=>{
  return (
    <li className="price-row">
      <span className="label">{props.label}</span>
      {props.price && <span className="price">{props.price}</span>}
    </li>
  );
};


export default function(props){
  return (
    <div className="residential">
      <PriceGroup header="Apartments - Occupied Units">
        <PriceRow label="Effiencies" price="$95.00"/>
        <PriceRow label="One Bedroom" price="$105.00"/>
        <PriceRow label="Two Bedroom" price="$115.00"/>
        <PriceRow label="Three Bedroom" price="$125.00"/>
        <PriceRow label="Two Level 2BR" price="$205.00"/>
        <PriceRow label="Two Level 3BR" price="$215.00"/>
        <PriceRow label="Three Level 2BR" price="$225.00"/>
        <PriceRow label="Three Level 3BR" price="$235.00"/>
      </PriceGroup>
      <PriceGroup header="Speciality Work">
        <PriceRow label="Red Beverage Stain Removal"/>
        <PriceRow label="Bleach Stain Repairs"/>
        <PriceRow label="Rust Stain Removal"/>
        <PriceRow label="TNT & Pre-Spot"/>
        <PriceRow label="Fog Odor Treatment"/>
        <PriceRow label="Paint, Oil & Gum Removal"/>
        <PriceRow label="Pet Odor Treatment"/>
        <PriceRow label="Seal Floors From Odor"/>
        <PriceRow label="Mildew Odor Treatment"/>
        <PriceRow label="Water Damage Repairs"/>
      </PriceGroup>
      <PriceGroup header="Carpet Repairs">
        <PriceRow label="Three - Foot Seam Repair"/>
        <PriceRow label="Three - Foot Double Seam"/>
        <PriceRow label="Side & Corner Patch"/>
        <PriceRow label="Center Patch"/>
        <PriceRow label="Cookie Cut Patch"/>
        <PriceRow label="Re-Stretch Carpet"/>
      </PriceGroup>
      <PriceGroup header="Furniture Cleaning Prices">
        <PriceRow label="Three Seat Sofa" price="$75.00"/>
        <PriceRow label="Loveseat Sofa" price="$65.00"/>
        <PriceRow label="Sofa Chair" price="$55.00"/>
      </PriceGroup>
       <h1>Don’t see your floor plan? Contact us today for additional pricing!</h1>
    </div>
  )
}
