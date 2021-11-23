import React from 'react';

import './random-planet.css'
const Randomplanet = () => {
    return (
        <div>
            <div className="Randomplanet card">
                <img src="./img/planets.jpg" alt="planets" />
                <div className="card-body">
                    <h4>
                        R2-D2
                    </h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">
                                Gender
                            </span>
                            <span>
                                male
                            </span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">
                                Britch Year
                            </span>
                            <span>
                                43
                            </span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">
                                Eya color
                            </span>
                            <span>
                                red
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Randomplanet;
