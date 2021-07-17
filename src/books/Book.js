import React from 'react';
import '../global/Global.css';
function Book(props) {
    return <div className="question">
        <h3 className="question-name">{props.name}</h3>
        <div className="question-link"><a style={{ color: "white", textDecoration: "none" }} href={props.link} target="_blank">Read</a></div>
    </div>
}

export default Book;