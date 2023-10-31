import axios from "axios";

import API_URL from "./API";

const login = async (payload) => {
  try {
    const result = await axios.post(`${API_URL}/nvlogin/getlogininfo`, payload);
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
  login,
};

export default shopService;
