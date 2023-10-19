import axios from "axios";

import API_URL from "./API";

const getCategories = async () => {
  try {
    const result = await axios.get(`${API_URL}/coupon_category/getforapp/`);
    if (result.data.status === 201) {
      return result.data.result;
    } else {
      return undefined;
    }
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

const getAllCategories = async () => {
  try {
    const result = await axios.get(`${API_URL}/coupon_category/getallforapp/`);
    if (result.data.status === 201) {
      return result.data.result;
    } else {
      return undefined;
    }
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

const getBrands = async () => {
  try {
    const result = await axios.get(`${API_URL}/brand/view/`);
    if (result.data.status === 201) {
      return result.data.result;
    } else {
      return undefined;
    }
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

const getGoods = async () => {
  try {
    const result = await axios.get(`${API_URL}/coupon/viewforapp/`);
    if (result.data.status === 201) {
      return result.data.result;
    } else {
      return undefined;
    }
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

const sendSearchKey = async (payload) => {
  try {
    await axios.post(`${API_URL}/search/searchkey`, payload);
    // const result = await axios.post(`${API_URL}/search/search/`);
    // if (result.data.status === 201) {
    //   return result.data.result;
    // } else {
    //   return undefined;
    // }
  } catch (err) {
    console.log(err);
    // return undefined;
  }
};

const getSearchKey = async () => {
  try {
    const result = await axios.get(`${API_URL}/search/view/`);
    if (result.data.status === 201) {
      return result.data.result;
    } else {
      return undefined;
    }
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

const shopService = {
  getCategories,
  getAllCategories,
  getBrands,
  getGoods,
  sendSearchKey,
  getSearchKey,
};

export default shopService;
