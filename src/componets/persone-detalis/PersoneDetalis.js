import React from 'react';


import './persone-detalis.css'
const Personedetalis = () => {
    return (
        <div className="person-detalis card">
            <img src="./img/r2d2.jpg" alt="planets" />
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
    );
}

export default Personedetalis;
