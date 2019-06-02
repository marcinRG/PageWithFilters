import React from 'react';
import PropTypes from 'prop-types';

export function Slide(props) {
   return (
       <div className="slide">
           <div className="info">
               <h2 className="info-title">{props.title}</h2>
               <p className="info-description">{props.description}</p>
           </div>
           <img src={props.image} className="image" alt={props.imageAlt}/>
       </div>
   );
}

Slide.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired
};
