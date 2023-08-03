import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h3>Our conditions</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime facere neque dolores, odit expedita laborum, quod ex corrupti possimus omnis quos unde suscipit reiciendis vel eos quo error! Nostrum?</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndConditions;