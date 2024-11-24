import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const apiRequest = async <T>(
  endpoint: string,
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
  query: string
  //   data?: object
): Promise<T> => {
  const config: AxiosRequestConfig = {
    url: `https://sky-scrapper.p.rapidapi.com/api/v1/${endpoint}`,
    method,
    headers: {
      "x-rapidapi-key": "64e835be70msh2588aa2d74fe360p149190jsn4d6cdaa05d1e",
      "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
    },
    params: {
      query,
      locale: "en-US",
    },
    // data,
  };

    const options = {
      method: "GET",
      url: "https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport",
      params: {
        query: "new",
        locale: "en-US",
      },
      headers: {
        "x-rapidapi-key": "64e835be70msh2588aa2d74fe360p149190jsn4d6cdaa05d1e",
        "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
      },
    };

  try {
    console.log(config);
    const response: AxiosResponse<T> = await axios.request(options);
    return response.data;
  } catch (error: any) {
    console.error("API Request Error:", error.message);
    if (error.response) {
      console.error("Response status:", error.response.status);
      console.error("Response data:", error.response.data);
    }
    throw error;
  }
};

export default apiRequest;
