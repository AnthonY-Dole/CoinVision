import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    let res = error.response;
    if (res.status == 401) {
      console.error("Oups " + res.status);
    }
    console.error("Looks like there was a problem. Status Code: " + res.status);
    return Promise.reject(error);
  }
);

const ping = async () => {
  const response = await axiosClient.get("/ping");
  return response;
};

const getCoins = async () => {
  const response = await axiosClient.get("/coins?skip=0&limit=20&currency=EUR");
  return response;
};

export { ping, getCoins };
