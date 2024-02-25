const url = 'https://rickandmortyapi.com/api/character';
export const fetchRickMorty = async () => {
    const data = await fetch(url);
    const info = await data.json();
    const character = info.results.map((character: any) => {
        return {
            id: character.id,
            name: character.name,
            image: character.image,
            status: character.status,
            gender: character.gender,
            origin: character.origin.name,
            episodes: character.episode,
            species: character.species
        }
    })
    return character
}