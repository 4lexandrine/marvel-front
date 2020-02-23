import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

import ComicsPagination from "../../components/Pagination/ComicsPagination";
import ComicCard from "../../components/Card/ComicCard";
import Search from "../../components/Search/Search";


const Comics = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [comics, setComics] = useState({});
    const [total, setTotal] = useState(0);
    const [search, setSearch] = useState("");
    const limit = 100;

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/comics?limit=${limit}`);
            setTotal(response.data.total);
            setComics(response.data.results);
            setIsLoading(false);
        }

        const fetchSearchData = async () => {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/comics?nameStartsWith=${search}&limit=${limit}`);
            setTotal(response.data.total);
            setComics(response.data.results);
            // console.log(search);

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
                <title>Comics</title>
            </Helmet>
            {isLoading ? <p className="loading d-flex justify-center">En cours de chargement...</p> :
                <section>
                    <Search search={search} setSearch={setSearch} />
                    <ComicsPagination total={total} setComics={setComics} />
                    <div className="wrapper d-flex wrap justify-center bg">
                        {comics.map(comic => {
                            return <ComicCard key={comic.id} comic={comic} />
                        })}
                    </div>
                    <ComicsPagination total={total} setComics={setComics} />
                </section>
            }
        </>
    );
}

export default Comics;