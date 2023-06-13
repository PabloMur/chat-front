import { useNavigate } from "react-router-dom";
import {
  APICheckEmail,
  APICreateChatroom,
  APIGetRoomRealtimeID,
  APIGetToken,
} from "../lib/APIcalls";

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
    console.log(token);
    return token;
  } catch (error) {
    console.error(error);
  }
};

export const useCreateRoom = async (email: string, token: string) => {
  try {
    const createRoom = await APICreateChatroom(email, token);
    return createRoom;
  } catch (error) {
    console.error(error);
  }
};

export const useGetInRoom = async (roomId: string) => {
  try {
    const getInRoom = await APIGetRoomRealtimeID(roomId);
    return getInRoom;
  } catch (error) {
    console.error(error);
  }
};
export const useGoTo = () => {
  const goTo = useNavigate();
  return goTo;
};
