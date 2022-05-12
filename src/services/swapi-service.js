

// Класс - Сервис Class - Service 
export default class SwapiService {

  _apiBase = `https://swapi.dev/api`;  
  
  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok){
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`)
    } 
   return await res.json();
  }

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPerson);
  }
  
  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._transformPlanet);
  }  
  
  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarship);
  }

  async getPerson(id) {
    const person = await this.getResource(`/people/${id}`);
    return this._transformPerson(person);
  }

  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}`);
    return this._transformPlanet(planet);
  }

  async getStarship(id) {
    const starship = await this.getResource(`/starships/${id}`);
    return this._transformStarship(starship);
  }

  _extractId (planet) {
    const idRegexExp =  /\/([0-9]*)\/$/;
    return planet.url.match(idRegexExp)[1];
  }
  
  _transformPlanet = (planet) => {
    return (
      {
        id: this._extractId(planet),
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter,
        orbitalPeriod: planet.orbital_period,
        climate: planet.climate,
      }
    )
  }

  _transformStarship = (starship) => {
    return (
      {
        id: this._extractId(starship),
        name: starship.name,
        model: starship.model,
        manufacturer: starship.manufacturer,
        costInCredits: starship.cost_in_credits,
        length: starship.length,
        crew: starship.crew,
        passengers: starship.passengers,
        cargoCapacity: starship.cargo_capacity,
      }
    )
  }
  _transformPerson = (person) => {
    return (
      {
        id: this._extractId(person),
        name: person.name,
        gender: person.gender,
        birthYear: person.birth_year,
        eyeColor: person.eye_color,
      }
    )
  }

}

const swapi = new SwapiService();

swapi.getPerson(3).then((person) => {
    console.log(person.name);
});
swapi.getStarship(3).then((person) => {
    console.log(person.name);
});
