import React, { useState, useEffect } from 'react';
import '../global/Global.css';
import BookList from '../books/BookList.js';
import axios from 'axios';
import * as API from '../constants/Apilocator.js';
function Books() {
    const [flag, setFlag] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        setFlag(true);
        axios.get(`${API.BACKEND_ROOT}/getBookData`)
            .then(res => {
                setData(res.data);
            });
    }, []);
    return (
        <>{flag && <div className="layout">
            <div className="topbar">
                <p className="topheading">Books</p>
            </div>
            <BookList content={data[0]}/>
            </div>}</>);
}
export default Books;