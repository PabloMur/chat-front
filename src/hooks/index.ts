import { useNavigate } from "react-router-dom";
import {
  APICheckEmail,
  APICreateChatroom,
  APIGetRoomRealtimeID,
  APIGetToken,
  APISendMessage,
} from "../lib/APIcalls";
import { useRecoilValue } from "recoil";
import { userTokenAtom } from "../atoms";

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

export const useSendMessage = async (message: any, token: any) => {
  try {
    const sendMessageRes = await APISendMessage(message, token);
    return sendMessageRes;
  } catch (error) {
    console.error(error);
  }
};
export const useGoTo = () => {
  const goTo = useNavigate();
  return goTo;
};
