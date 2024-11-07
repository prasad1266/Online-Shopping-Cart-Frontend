import axios from "axios";

export const apiClient = {
  post: async (url, payload) => {
    try {
      console.log("payload : ",payload)
      const response = await axios.post(url, payload);
      return response.data;
    } catch (error) {
      console.log("error in catch", error);
    }
  },
};
