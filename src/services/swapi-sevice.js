export default class SwapiService {

    async getResourse(url) {
        const res = await fetch(url)
        return await res.json()
    }

    //Люди
    async getAllpeople() {
        const res = await this.getResourse(`https://swapi.dev/api/people/`);
        return res.results.map(this.transformPerson)
    }
    async getPersone(id) {
        const person = await this.getResourse(`https://swapi.dev/api/people/${id}/`)
        return this.transformPerson(person)
    }

    //Планеты
    async getAllPlanets() {
        const res = await this.getResourse(`https://swapi.dev/api/planets/`);
        return res.results.map(this.transformPlanrt)
    }
    async getPlanet(id) {
        const planet = await this.getResourse(`https://swapi.dev/api/planets/${id}/`)
        return this.transformPlanrt(planet)
    }

    //Космические корабли
    async getAllStarShips() {
        const res = await this.getResourse(`https://swapi.dev/api/starships/`);
        return res.results.map(this.transformStarShip)
    }
    async getStarShip(id) {
        const starShip = await this.getResourse(`https://swapi.dev/api/starships/${id}/`);
        return this.transformStarShip(starShip)
    }

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    transformPlanrt = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
        }
    }
    transformStarShip = (starShip) => {
        return {
            id: this._extractId(starShip),
            name: starShip.name,
            model: starShip.model,
            manufacturer: starShip.manufacturer,
            constInCredits: starShip.constInCredits,
            length: starShip.length,
            crew: starShip.crew,
            passengers: starShip.passengers,
            cargoCapacity: starShip.cargoCapacity,
        }
    }
    transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }
}
