import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import questionsData from '../data/question.json';
import QuestionNumberButton from '../components/QuestionNumberButton'; // Adjust the path if necessary
import ConfirmationModal from '../components/ConfirmationModal';
const Question = () => {
    const { id } = useParams();
    const question = questionsData.find((q) => q.id === parseInt(id));
    const [selectedOption, setSelectedOption] = useState('');
    const totalQuestions = questionsData.length;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };
      const handleConfirmation = () => {
        // Handle confirmation action here, e.g., complete exam
        // For now, just close the modal
        navigate("/result");
      };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const getNextQuestionId = () => {
        const nextQuestionId = parseInt(id) + 1;
        return nextQuestionId <= questionsData.length ? nextQuestionId : null;
    };

    const getPreviousQuestionId = () => {
        const previousQuestionId = parseInt(id) - 1;
        return previousQuestionId >= 1 ? previousQuestionId : null;
    };
    const navigate = useNavigate();

    return (
        <div className="flex flex-row items-center justify-center space-y-4 space-x-12 p-16">
            <div className="flex flex-col justify-center space-y-4">
                <div className="flex justify-between">
                    <div className="flex items-center justify-center space-x-2">
                        {getPreviousQuestionId() !== null && (
                            <Link
                                to={`/question/${getPreviousQuestionId()}`}
                                className="flex items-center justify-center space-x-2 text-gray-500 font-medium"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                                <span>Pertanyaan Sebelumnya</span>
                            </Link>
                        )}
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                    {getNextQuestionId() !== null && (
                            <Link
                                to={`/question/${getNextQuestionId()}`}
                                className="flex items-center justify-center space-x-2 text-gray-500 font-medium"
                            >Pertanyaan selanjutnya
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                        </Link>
                        )}
                    </div>
                </div>
                
                <span className="text-gray-500 font-medium">Pertanyaan: {id}/{totalQuestions}</span>
                <h2 className="text-4xl font-semibold text-gray-800">{question.question}</h2>
                {question.options.map((option, index) => (
                    <button
                        key={index}
                        className="bg-gray-100 border border-gray-300 rounded-full py-3 px-4 text-gray-800 font-medium hover:bg-gray-200 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                        onClick={() => handleOptionSelect(option)}
                    >
                        {option}
                    </button>
                ))}
                {getNextQuestionId() !== null ? (
                    <></>
                ) : (
                    <button onClick={openModal} class="bg-gray-900 border rounded-full py-3 px-4 text-white font-medium hover:bg-gray-800 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Selesaikan Ujian
                    </button>
                )}
                <ConfirmationModal isOpen={isModalOpen} onClose={closeModal} onConfirm={handleConfirmation} />
            </div>

            <div className="grid grid-cols-5 gap-2 border border-black p-4 items-center justify-center">
                {Array.from({ length: questionsData.length }, (_, i) => i + 1).map((num) => (
                    <QuestionNumberButton key={num} id={num} />
                ))}
            </div>
        </div>
    );
};

export default Question;
