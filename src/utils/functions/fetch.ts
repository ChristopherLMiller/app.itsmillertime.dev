import Axios from "axios";
import Router from "next/router";

const fetch = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

fetch.interceptors.response.use(
  (response) => response,
  function (error) {
    if (error.response.status === 401) {
      Router.push("/login");
    } else {
      return Promise.reject(error);
    }
  }
);

export const addBearerToken = (token: string) => {
  fetch.defaults.headers.Authorization = `Bearer ${token}`;
};

export const removeBearerToken = () => {
  delete fetch.defaults.headers.Authorization;
};

export const gqlQuery = (queryString: string, variables?: any) => {
  return fetch.post("/graphql", { query: queryString }, variables);
};

export default fetch;
