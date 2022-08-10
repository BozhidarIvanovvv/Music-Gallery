import * as fetcher from "../Utils/fetcher";
import { constants } from "../Constants/urlConstants";

export const register = (email, password) =>
  fetcher.post(`${constants.baseUrlUsers}/register`, { email, password });

export const login = (email, password) =>
  fetcher.post(`${constants.baseUrlUsers}/login`, { email, password });

export const logout = async (accessToken) => {
  try {
    const response = await fetch(`${constants.baseUrlUsers}/logout`, {
      headers: {
        "X-Authorization": accessToken,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
