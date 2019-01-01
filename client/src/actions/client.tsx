import axios from "axios";
import { Redirect } from "react-router";
import * as React from "react";

const client = axios.create({
  baseURL: "http://localhost:3001/api"
});

const token = window.localStorage.getItem("token");
client.defaults.headers.common.authorization = `Bearer ${token}`;

client.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      //   remove token since its expired
      localStorage.setItem("token", "");
      return <Redirect to="/" />;
    }
    return Promise.reject(error);
  }
);

export default client;
