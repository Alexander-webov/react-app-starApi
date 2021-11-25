import React, { useEffect, useState } from 'react';

import './itemList.css'

import Spinner from '../spinner/spinner'
import SwapiSevice from '../../services/swapi-sevice';
const Itemlist = ({ onItemSelect }) => {

    const [peopleList, setpeopleList] = useState(null);

    let swapiSevice = new SwapiSevice();


    useEffect(() => {
        swapiSevice.getAllpeople().then(person => {
            setpeopleList(person)
        }).catch()

    }, [])



    if (!peopleList) {
        return <Spinner />
    }




    return (
        <div>
            <ul className="item-list list-group">
                {
                    peopleList.map(el => {
                        return (
                            <li className="list-group-item"
                                key={el.id}
                                onClick={() => onItemSelect(el.id)}
                            >
                                {el.name}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Itemlist;
