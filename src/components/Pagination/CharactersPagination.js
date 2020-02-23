import React from "react";
import axios from "axios";
import "./Pagination.css";

const Pagination = ({ total, setCharacters }) => {
    const pages = [];

    for (let i = 0; i < total; i += 100) {
        i === 0 ? pages.push(i + 1) :
            pages.push(i / 100 + 1);
    }
    const limit = 100;
    return (
        <div>
            <ul className="pagination d-flex wrapper justify-center">
                {pages.map(page => {
                    return (
                        <li key={page}>
                            <button className="pagination-btn" onClick={async () => {
                                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/characters?page=${page}&limit=${limit}&offset=${page * 100}`);
                                setCharacters(response.data.results)
                            }}>{page}</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Pagination;



