import React from "react";
import axios from "axios";
import "./Pagination.css";

const ComicsPagination = ({ total, setComics }) => {
    const pages = [];

    for (let i = 0; i < total; i += 100) {
        i === 0 ? pages.push(i + 1) :
            pages.push(i / 100 + 1);
    }
    const limit = 100;
    return (
        <div>
            <ul className="pagination wrapper d-flex">
                {pages.map(page => {
                    return (
                        <li key={page}>
                            <button className="pagination-btn" onClick={async () => {
                                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/comics?page=${page}&limit=${limit}&offset=${page * 100}`);
                                // console.log(response);

                                setComics(response.data.results)
                            }}>{page}</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default ComicsPagination;



