export default class SwapiService {

    async getResourse(url) {
        const res = await fetch(url)
        return await res.json()
    }

    //Люди
    async getAllpeople() {
        const res = await this.getResourse(`https://swapi.dev/api/people/`);
        return res.results;
    }
    getPersone(id) {
        return this.getResourse(`https://swapi.dev/api/people/${id}`)
    }

    //Планеты
    async getAllPlanets() {
        const res = await this.getResourse(`https://swapi.dev/api/planets/`);
        return res.results;
    }
    getPlanet(id) {
        return this.getResourse(`https://swapi.dev/api/planets/${id}`)
    }

    //Космические корабли
    async getAllStarShips() {
        const res = await this.getResourse(`https://swapi.dev/api/starships/`);
        return res.results;
    }
    getStarShip(id) {
        return this.getResourse(`https://swapi.dev/api/starships/${id}`)
    }
}




const swapi = new SwapiService();

swapi.getAllPlanets().then(data => {
    console.log(data);
    data.map(name => console.log('Планета ' + name.name))
})

swapi.getAllStarShips().then(data => {
    console.log(data);
    data.map(name => console.log('Космические корабли ' + name.name))
})