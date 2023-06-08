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
