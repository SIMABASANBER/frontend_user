import axiosWithConfig from "../axiosWithConfig";

export const getTotalDataQuestions = async () => {
    try {
        const response = await axiosWithConfig.get(`/question/total`);
        return response.data.total_question;
    } catch (error) {
        console.error(error);
        return 0;
    }
}