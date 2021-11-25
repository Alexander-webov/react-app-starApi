import React, { useEffect, useState, useCallback } from 'react';

import Spinner from '../spinner/spinner'
import SwapiSevice from '../../services/swapi-sevice';



import './persone-detalis.css'
const Personedetalis = ({ personId }) => {
    const [person, setPerson] = useState(0);
    let swapiSevice = new SwapiSevice();
    useEffect(() => {
        if (person !== personId) {
            updatePerson()
        }
    }, [person])

    const updatePerson = () => {
        if (!personId) {
            return;
        }
        swapiSevice.getPersone(personId)
            .then((person) => {
                setPerson(person)

            })

    }


    if (person === 0) {
        return <Spinner />
    }

    return (

        <div className="person-detalis card" >
            <img src={`https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`} alt="person" />
            <div className="card-body">
                <h4>
                    {person.name}
                </h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">
                            Gender
                        </span>
                        <span>  &nbsp;
                            {person.gender}
                        </span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">
                            Britch Year
                        </span>
                        <span>  &nbsp;
                            {person.birthYear}
                        </span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">
                            Eya color
                        </span>
                        <span>  &nbsp;
                            {person.eyeColor}
                        </span>
                    </li>
                </ul>
            </div>
        </div >
    );
}

export default Personedetalis;
