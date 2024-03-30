export type ICharacter = {
 "name": string;
 "height": string,
 "mass": string,
 "hair_color": string,
 "skin_color": string,
 "eye_color": string,
 "birth_year": string,
 "gender": string,
 "homeworld": string | number,
 "films": number[],
 "species": number[],
 "vehicles": number[],
 "starships": number[],
 "created": string,
 "edited": string,
 "url": string
}

export type IPlanet = {
 "name": string,
 "rotation_period": string,
 "orbital_period": string,
 "diameter": string,
 "climate": string,
 "gravity": string,
 "terrain": string,
 "surface_water": string,
 "population": string,
 "residents": number[],
 "films": number[],
 "created": string,
 "edited": string,
 "url": string
}

export type IFilm = {
 "title": string,
 "episode_id": number,
 "opening_crawl": string,
 "director": string,
 "producer": string,
 "release_date": string,
 "characters": number[],
 "planets": number[],
 "starships": number[],
 "vehicles": number[],
 "species": number[],
 "created": string,
 "edited": string,
 "url": string
}

export type ISpecies = {
 "name": string,
 "classification": string,
 "designation": string,
 "average_height": string,
 "skin_colors": string,
 "hair_colors": string,
 "eye_colors": string,
 "average_lifespan": string,
 "homeworld": number,
 "language": string,
 "people": number[],
 "films": number[],
 "created": string,
 "edited": string,
 "url": string
}

export type IVehicle = {
 "name": string,
 "model": string,
 "manufacturer": string,
 "cost_in_credits": string,
 "length": string,
 "max_atmosphering_speed": string,
 "crew": string,
 "passengers": string,
 "cargo_capacity": string,
 "consumables": string,
 "vehicle_class": string,
 "pilots": number[],
 "films": number[],
 "created": string,
 "edited": string,
 "url": string
}

export type IStarship = {
 "name": string,
 "model": string,
 "manufacturer": string,
 "cost_in_credits": string,
 "length": string,
 "max_atmosphering_speed": string,
 "crew": string,
 "passengers": string,
 "cargo_capacity": string,
 "consumables": string,
 "hyperdrive_rating": string,
 "MGLT": string,
 "starship_class": string,
 "pilots": number[],
 "films": number[],
 "created": string,
 "edited": string,
 "url": string
}

export type ISelectedCharacter = {
 info: ICharacter,
 starships: IStarship[],
 films: IFilm[],
}