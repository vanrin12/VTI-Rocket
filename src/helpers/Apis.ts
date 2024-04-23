import axios from "axios";

interface Params {
  baseUrl: string;
  auth: {
    username: string;
    password: string;
  },
  method: string;
}
const config: Params = {
  baseUrl: process.env.REACT_APP_API_URL || '',
  auth: {
    username: "Username1",
    password: "123456",
  },
  method: "GET",
};

export const getAPI = async(url: string): Promise<any> => {
  return await axios({
    ...config,
    url: `${config.baseUrl}/${url}`
  }).then(response => {
    return {
      status: response.status,
      data: response.data
    }
  })
  .catch(err => {
    return {
      status: err.status,
      data: err.response
    }
  })
}
