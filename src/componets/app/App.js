import React from 'react';
import Header from '../header/Header';
import Itemlist from '../item-list/ItemList';
import Personedetalis from '../persone-detalis/PersoneDetalis';
import Randomplanet from '../random-planet/RandomPlanet';

import './app.css'
const App = () => {
    return (
        <div className="app">
            <Header />
            <Randomplanet />

            <div className="row md2">
                <div className="col-md-6">
                    <Itemlist />
                </div>
                <div className="col-md-6">
                    <Personedetalis />
                </div>
            </div>
        </div>
    );
}

export default App;
