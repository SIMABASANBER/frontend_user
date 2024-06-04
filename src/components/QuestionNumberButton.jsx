import React from 'react';
import { Link } from 'react-router-dom';

const QuestionNumberButton = ({ id }) => {
    return (
        <Link
            to={`/question/${id}`}
            className="bg-gray-100 text-gray-800 font-medium text-center rounded-md py-2 px-4 hover:bg-gray-200 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        >
            {id < 10 ? `0${id}` : id}
        </Link>
    );
};

export default QuestionNumberButton;
