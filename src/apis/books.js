import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/books",
  params: {
    key: process.env.API_KEY,
  },
});
