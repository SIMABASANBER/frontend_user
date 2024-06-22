import axiosWithConfig from "../axiosWithConfig";

export const getQuestionById = async (questionId) => {
  try {
    const response = await axiosWithConfig.get(`/question/${questionId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching the question:", error);
    return null;
  }
};

export const submitAnswer = async (questionId, selectedAnswer) => {
    try {
        const response = await axiosWithConfig.post(`/answer/${questionId}`, {
            answerUser: selectedAnswer});
        return response;
    } catch (error) {
        console.error('Error submitting the answer:', error);
        return null;
    }
}
