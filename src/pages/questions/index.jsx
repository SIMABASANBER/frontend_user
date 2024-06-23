import React, { useState, useEffect } from "react";
import Question from "./components/question";
import { getQuestionById } from "../../api/question/api";
import { submitAnswer } from "../../api/question/api";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";
import { getTotalDataQuestions } from "../../api/start/api";

function Questions() {
  const [question, setQuestion] = useState(null);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(4);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchTotalQuestions = async () => {
    try {
      const total = await getTotalDataQuestions();
      setTotalQuestions(total);
    } catch (error) {
      console.error("Error fetching the total questions:", error);
    }
  };

  const fetchQuestion = async (questionId) => {
    setLoading(true);
    try {
      const data = await getQuestionById(questionId);
      setQuestion(data);
    } catch (error) {
      console.error("Error fetching the question:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTotalQuestions();
    fetchQuestion(currentQuestionIndex);
  }, [currentQuestionIndex]);

  const handleSubmitAnswer = async (selectedAnswer) => {
    try {
      await submitAnswer(currentQuestionIndex, selectedAnswer);
      if (currentQuestionIndex + 1 < (totalQuestions + 4)) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      } else {
        navigate("/result");
      }
    } catch (error) {
      console.error("Error submitting the answer:", error);
    }
  };

  const selectAndSubmitAnswer = (answer) => {
    handleSubmitAnswer(answer);
  };

  return (
    <div>
      <header>
        <h1 className="text-center text-xl font-bold mb-4 mt-12">
          Jawab Soal Berikut Ini:
        </h1>
        <p className="text-center text-l font-bold mb-4">Anda hanya mempunyai 1 kali kesempatan menjawab untuk setiap soal</p>
        {loading ? (
          <div className="flex items-center justify-center pt-32">
            <ClipLoader
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : question ? (
          <div>
            <Question
              question={question}
              selectAndSubmitAnswer={selectAndSubmitAnswer}
            />
          </div>
        ) : (
          <p className="text-center">Tidak ada soal</p>
        )}
      </header>
    </div>
  );
}

export default Questions;
