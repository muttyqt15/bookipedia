import { UserClientData } from "@/types/user";
import { fetchData } from "./actions";

export const loginUser = async (userData: UserClientData) => {
  const userInfo = await fetchData(`${process.env.NEXT_PUBLIC_BE_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  return userInfo;
};

export const signupUser = async (userData: UserClientData) => {
  const response = await fetchData(`${process.env.NEXT_PUBLIC_BE_URL}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  return response;
};
