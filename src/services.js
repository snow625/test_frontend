import axios from "axios";
const baseURL = import.meta.env.VITE_APP_API;

const instance = axios.create({
    baseURL,
  });

  
  export const getBurgers = async () => {
    try {
      const { data } = await instance.get("/burgers");
      return data;
    } catch (error) {
      console.log(error);
      return false
    }
  };

  export const getOrders = async () => {
    try {
      const { data } = await instance.get("/orders");
      return data;
    } catch (error) {
      console.log(error);
      return false
    }
  };
  export const createOrder = async (value) => {
    try {
      const { data } = await instance.post("/orders", {...value});
      return data;
    } catch (error) {
      console.log(error);
      return false
    }
  };

