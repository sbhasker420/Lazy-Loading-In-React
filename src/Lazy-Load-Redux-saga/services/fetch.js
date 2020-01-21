import axios from "axios";
export const getData = ({ counter, limit }) =>
  axios.get("https://jsonplaceholder.typicode.com/photos", {
    params: {
      _limit: limit,
      _start: counter
    }
  });
