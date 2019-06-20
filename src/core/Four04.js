
import React from 'react';

import './four04.css'

const Four04 = props => {
    return (
        <div className="nb-error">
            <div className="error-code">404</div>
            <h3 className="font-bold">We couldn't find the page..</h3>

            <div className="error-desc">
                Sorry, but the page you are looking for was either not found or does not exist. 
                
                <ul className="list-inline text-center text-sm">
                <li className="list-inline-item"><a className="text-muted">Home</a></li>
                <li className="list-inline-item"><a className="text-muted">Projects</a></li>
                <li className="list-inline-item"><a className="text-muted">Tasks</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Four04;
