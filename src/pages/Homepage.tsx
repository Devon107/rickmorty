import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Characters from '../components/Characters';
import { fetchRickMorty } from '../api/Fetchrickmorty';


const Homepage = () => {
    const [characters, setCharacters] = useState(null);

    const reqApi = async () => {
        const api = await fetchRickMorty();
        setCharacters(api);
    }

    return (
        <>
            <Header/>
            <main>
                {characters ? <Characters characters={characters} setCharacters={setCharacters} /> : <button onClick={reqApi} className="btn-search">Buscar personaje</button>}
            </main>
            <Footer />
        </>
    );
};

export default Homepage;