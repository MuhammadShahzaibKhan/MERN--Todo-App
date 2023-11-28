import axios from "axios";

export const apiHandle = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    Authorization: `Bearer`,
  },
});

export const Get = (endPoint, id) => {
  return apiHandle.get(`${endPoint}/${id ? id : ""}`);
};

export const Post = (endPoint, model) => {
  return apiHandle.post(`${endPoint}`, model);
};

export const Put = (endPoint, id, model) => {
  return apiHandle.put(`${endPoint}/${id}`, model);
};

export const Delete = (endPoint, id) => {
  return apiHandle.delete(`${endPoint}/${id}`);
};
