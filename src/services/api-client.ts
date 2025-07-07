import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b6dd3c4eb54e4fed99b19f3466de8eff",
  },
});
