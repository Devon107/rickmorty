type Props = {
    characters: any
    setCharacters: (arg0: any) => void
}
const Characters = ({characters, setCharacters} : Props) => {
    return (
        <div className="characters">
            <h2>Characters</h2>
            <span className="back-home" onClick={e => setCharacters(null)}>Volver a la home</span>
            <article className="container-characters">
                {characters.map((character: any) => 
                    (
                        <div className="character-container" key={character.id}>
                            <div>
                                <img src={character.image} alt={character.name} />
                            </div>
                            <div>
                                <h3>{character.name}</h3>
                                <h6>
                                    {character.status==="Alive" ? <><span className="alive"/>Alive</> : <><span className="dead"/>Dead</>}
                                </h6>
                                <p>
                                    <span>Species:</span> {character.species}
                                </p>
                                <p>
                                    <span>Gender:</span> {character.gender}
                                </p>
                                <p>
                                    <span>Origin:</span> {character.origin}
                                </p>
                                <p>
                                    <span>Episodes:</span> {character.episodes.length}
                                </p>
                            </div>
                        </div>
                    )
                )}
            </article>
        </div>
    );
}

export default Characters;