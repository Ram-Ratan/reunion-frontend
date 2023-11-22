import axios from "axios";
import * as CONSTANT from "./api.constant";


export const getAllProperties = async () => {
  let url = `${CONSTANT.API_URL}/api/list-properties`;
  const response = await axios.get(url);
  return response;
};