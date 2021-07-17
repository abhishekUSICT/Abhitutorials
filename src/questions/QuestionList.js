import React, { useState, useEffect } from 'react';
import Question from './Question.js';

function QuestionList(props) {
    return (
        <>
            {props != null && props.content != null && props.content.questions != null && props.content.questions.map((question) => {
                return <Question name={question.name} link={question.link} />
            })}
        </>
    );
}
export default QuestionList;