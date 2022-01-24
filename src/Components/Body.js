import React from 'react';

import './body.css'
import ximi from './img/ximi.jpg';

function Body(props) {
  return (
    <div>
        <i className="far fa-snowflake snow"></i>
        <main>

            <div id='info'>
                <p className='greeting'>Hello, I'm</p>
                <h2 className='name'>Gzim Dardhishta</h2>
                <p className='job'>Software Developer</p>
                <p className="email"><i class="fas fa-envelope"></i>gzimdardhishta0@gmail.com</p>
                <p className="phone-number"><i class="fas fa-phone"></i> +383 45 842 753</p>
                <p className="location"><i class="fas fa-map-marker-alt"></i> Kosovo</p>
            </div>

            <div className="photo">
                <img src={ximi} alt="" />
            </div>
        </main>
    </div>
  );
}

export default Body;
