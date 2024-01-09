import axios from 'axios';


const instance = axios.create({
  baseURL: "https://dummyapi.io/data/v1",
  headers: {
    "app-id": '6597f3003d2aa20dea4fd7af',

  }
});

export const fetcher = (url) => {
  return instance.get(url).then((res) => {

    if (!res.data) {
      throw Error(res.data.message);
    }

    return res.data;
  });
};

export default instance;