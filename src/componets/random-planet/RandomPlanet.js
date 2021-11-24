import React, { useState, useEffect } from 'react';

import SwapiSevice from '../../services/swapi-sevice';
import Spinner from '../spinner/spinner'


import './random-planet.css'
const Randomplanet = () => {
    const [randomPlanetData, setrandomPlanetData] = useState({
        planet: {}
    });

    const [loading, setloading] = useState(true);


    const urlImageApi = 'https://starwars-visualguide.com/assets/img/'
    let swapiSevice = new SwapiSevice()




    const { planet: { id, name, population, rotationPeriod, diameter } } = randomPlanetData;

    const onError = (err) => {
        return (
            '<h1> Произошла ошибка, скоро все починим <h1 />'
        )
    }
    const onPalnetLoaded = (planet) => {
        setrandomPlanetData({ planet })
        setloading(false)
    }
    const updatePlanet = () => {
        const id = Math.floor(Math.random() * 19) + 2;
        swapiSevice.getPlanet(id).then(onPalnetLoaded)
            .catch(onError)
    }

    useEffect(() => {
        console.log(1);
        setInterval(updatePlanet, 5000)
    }, []);



    return (
        <div className="Randomplanet card">

            {
                loading ? <Spinner /> : <div className="Randomplanet-item">

                    <img src={`${urlImageApi}planets/${id}.jpg`} alt="planets" />
                    <div className="card-body">
                        <h4>
                            {name}
                        </h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <span className="term">
                                    Population
                                </span>
                                <span>
                                    &nbsp;
                                    {population}
                                </span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">
                                    Rotation Period
                                </span>
                                <span>
                                    &nbsp;
                                    {rotationPeriod}
                                </span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">
                                    diameter
                                </span>
                                <span>
                                    &nbsp;
                                    {diameter}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

            }

        </div>
    );
}

export default Randomplanet;
