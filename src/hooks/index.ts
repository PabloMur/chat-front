import { useNavigate } from "react-router-dom";
import {
  APICheckEmail,
  APICreateChatroom,
  APICreateUser,
  APIGetGuestRoomsIDs,
  APIGetRoomRealtimeID,
  APIGetRoomsIDs,
  APIGetToken,
  APIGetUserMe,
  APISendMessage,
  APISetImGuest,
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
    if (token) return token;
  } catch (error) {
    console.error(error);
  }
};

export const useGetUserMe = async (token: any) => {
  try {
    const data = await APIGetUserMe(token);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const useCreateUser = async (email: string, password: string) => {
  try {
    const createdUser = await APICreateUser(email, password);
    return createdUser;
  } catch (error) {
    console.error(error);
  }
};

export const useMyRoomsIDs = async (email: string) => {
  try {
    const myRooms = await APIGetRoomsIDs(email);
    return myRooms;
  } catch (error) {
    console.error(error);
  }
};

export const useMyGuestRoomsIDs = async (email: string) => {
  try {
    const myRooms = await APIGetGuestRoomsIDs(email);
    return myRooms;
  } catch (error) {
    console.error(error);
  }
};

export const useAPISetImGuest = async (
  email: string,
  chatroomID: string,
  roomId: string
) => {
  try {
    const myRooms = await APISetImGuest(email, chatroomID, roomId);
    return myRooms;
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
