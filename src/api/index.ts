import axios from "axios";

export const api = {
  get: async (endpoint: string, queryParams: string) => {
    const { REACT_APP_BASE_URL, REACT_APP_API_KEY } = process.env;
    const response = await axios.get(
      `${REACT_APP_BASE_URL}${endpoint}?api_key=${REACT_APP_API_KEY}${
        queryParams && `&${queryParams}`
      }`
    );
    return response;
  },
};
