export const APICheckEmail = async (email: any) => {
  try {
    const fetching = await fetch(
      "https://chatback-theta.vercel.app/api/checkEmail",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );
    const response = await fetching.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const APICreateUser = async (email: string, password: string) => {
  try {
    const fetching = await fetch("https://chatback-theta.vercel.app/api/user", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        name: "User",
        hasCreatedRoom: false,
      }),
    });
    const response = await fetching.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const APIGetToken = async (email: string, password: string) => {
  try {
    const fetching = await fetch(
      "https://chatback-theta.vercel.app/api/getTokken",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );
    const response = await fetching.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const APICreateChatroom = async (email: string, token: string) => {
  try {
    const fetching = await fetch(
      "https://chatback-theta.vercel.app/api/createRoom",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ email }),
      }
    );
    const response = await fetching.json();
    return response.roomCreated.roomId;
  } catch (error) {
    console.error(error);
  }
};

export const APIGetRoomRealtimeID = async (roomId: string) => {
  try {
    const fetching = await fetch(
      "https://chatback-theta.vercel.app/api/getRoomId",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ roomId }),
      }
    );
    const response = await fetching.json();
    console.log(JSON.stringify(response) + " response de get in room");
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const APIGetRoomsIDs = async (email: string) => {
  try {
    const fetching = await fetch(
      "https://chatback-theta.vercel.app/api/myRooms",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );
    const response = await fetching.json();
    return response.roomIds;
  } catch (error) {
    console.error(error);
  }
};

export const APIGetGuestRoomsIDs = async (email: string) => {
  try {
    const fetching = await fetch(
      "https://chatback-theta.vercel.app/api/myGuestRooms",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );
    const response = await fetching.json();
    return response.roomIds;
  } catch (error) {
    console.error(error);
  }
};

export const APISetImGuest = async (
  email: string,
  chatroomID: string,
  roomId: string
) => {
  try {
    const fetching = await fetch(
      "https://chatback-theta.vercel.app/api/guestRoom",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chatroomID,
          email,
          roomId,
        }),
      }
    );
    const response = await fetching.json();
    return response.roomIds;
  } catch (error) {
    console.error(error);
  }
};

export const APISendMessage = async (message: any, token: string) => {
  try {
    const fetching = await fetch(
      "https://chatback-theta.vercel.app/api/message",
      {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(message),
      }
    );
    const response = await fetching.json();
    return response;
  } catch (error) {
    console.error(error);
  }
  return message;
};

export const APIGetUserMe = async (email: string, token: string) => {
  try {
    const fetching = await fetch("https://chatback-theta.vercel.app/api/me", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ email }),
    });
    const response = await fetching.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const APIDeleteChatroom = async (roomID: string, token: string) => {
  try {
    const fetching = await fetch(
      "https://chatback-theta.vercel.app/api/deleteRoom?roomId=" + roomID,
      {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const response = await fetching.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const APIDeleteAccount = async (token: string) => {
  try {
    const fetching = await fetch(
      "https://chatback-theta.vercel.app/api/deleteAccount",
      {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const response = await fetching.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};
