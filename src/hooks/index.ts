import { useNavigate } from "react-router-dom";
import { APICheckEmail, APIGetToken } from "../lib/APIcalls";

export const useCheckEmail = async (email: string) => {
  try {
    const checkEmail = await APICheckEmail(email);
    return checkEmail;
  } catch (error) {
    console.error(error);
  }
};

export const useGetToken = async (email: string, password: string) => {
  try {
    const token = await APIGetToken(email, password);
    return token;
  } catch (error) {
    console.error(error);
  }
};

export const useGoTo = () => {
  const goTo = useNavigate();
  return goTo;
};
