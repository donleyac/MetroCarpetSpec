import React from 'react';
import {FBPage} from 'facebook-plugins';
import './styles.scss';

export default function(props) {
    return (
      <div className="footer">
        <div className="contact-info">
          <h2 className="title">Metropolitian Carpet Specialists</h2>
          <p className="address">21441 Pacific Blvd.<br/> Sterling, VA 20166</p>
          <div className="numbers">
            <p className="info"><h2>Phone:</h2>703-964-3210</p>
            <p className="info"><h2>Fax:</h2>703-964-3215</p>
            <p className="info"><h2>Emergency:</h2>877-687-5730</p>
          </div>
          <p className="info email"><h2>Email:</h2>tdonley@dcmetrocarpet.com</p>
          <p ><h2>Business Hours:</h2>8:00 a.m. to 5:00 p.m,
          Monday through Friday <br/> 24-hour emergency service available</p>
        </div>
        <FBPage appId="yourFacebookAppId"
        href="https://www.facebook.com/Metropolitan-Carpet-Specialists-Inc-131101043624574/"
        tabs={['timeline', 'events', 'messages']}/>
      </div>
    )
}
