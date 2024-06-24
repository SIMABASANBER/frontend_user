import React from 'react';

const Question = ({ question, selectAndSubmitAnswer }) => (
  <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
    <h2 className="text-2xl font-bold mb-4">{question.id-3}.{question.title}</h2>
    <div className="grid grid-cols-1 gap-4">
      <button
        className="px-4 py-2 bg-[#293066] text-white rounded-lg hover:bg-slate-600 transition"
        onClick={() => selectAndSubmitAnswer(question.choise_a)}
      >
        {question.choise_a}
      </button>
      <button
        className="px-4 py-2 bg-[#293066] text-white rounded-lg hover:bg-slate-600 transition"
        onClick={() => selectAndSubmitAnswer(question.choise_b)}
      >
        {question.choise_b}
      </button>
      <button
        className="px-4 py-2 bg-[#293066] text-white rounded-lg hover:bg-slate-600 transition"
        onClick={() => selectAndSubmitAnswer(question.choise_c)}
      >
        {question.choise_c}
      </button>
      <button
        className="px-4 py-2 bg-[#293066] text-white rounded-lg hover:bg-slate-600 transition"
        onClick={() => selectAndSubmitAnswer(question.choise_d)}
      >
        {question.choise_d}
      </button>
    </div>
  </div>
);

export default Question;
