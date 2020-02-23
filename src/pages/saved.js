
import React, { useState } from 'react';
// import axios from "axios";
// import {Search} from "./search"
import Search from "./search"

function Saved() {
    const books = Search.savedBooks

    const [result, setResult] = useState([]);


    // function componentDidMount (){
    //     console.log(books)
    // }

    return (
        <div className="container">
            <h1>Google Books Search</h1>
            <h2><a href="/saved">Saved</a></h2>
            <h2><a href="/">Search</a></h2>

        
            {result.map(savedBooks => (
                <a className="p-3" target="_blank" href={books.previewLink}>
                    <img src={savedBooks.volumeInfo.imageLinks.thumbnail} alt={savedBooks.title} />
                </a>
            ))}
        </div>

    );
}



export default Saved;