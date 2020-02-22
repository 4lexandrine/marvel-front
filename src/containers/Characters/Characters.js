import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

import CharactersCard from "../../components/Card/CharactersCard";
import Pagination from "../../components/Pagination/CharactersPagination";
import Search from "../../components/Search/Search";

const Characters = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [characters, setCharacters] = useState({});
    const [total, setTotal] = useState(0);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/characters?page=1`);
            setTotal(response.data.total);
            setCharacters(response.data.results);
            setIsLoading(false);
        }
        const fetchSearchData = async () => {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/characters?nameStartsWith=${search}`);
            setTotal(response.data.total);
            setCharacters(response.data.results);

            setIsLoading(false);
        }
        if (!search) {
            fetchData();
        } else {
            fetchSearchData();
        }
    }, [search]);

    return (
        <>
            <Helmet>
                <title>Personnages</title>
            </Helmet>
            {isLoading ? <p className="loading d-flex justify-center">En cours de chargement...</p> :
                <section>
                    <Search search={search} setSearch={setSearch} />
                    <Pagination total={total} setCharacters={setCharacters} />
                    <div className="wrapper d-flex wrap justify-center bg">
                        {
                            characters.map(character => {
                                return <CharactersCard key={character.id} character={character} />
                            })}
                    </div>
                    <Pagination total={total} setCharacters={setCharacters} />
                </section>
            }
        </>
    );
}

export default Characters;