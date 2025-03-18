import client from "../config/googleConfig.js";

export const verifyToken = async (idToken) => {
  try {
    // console.log(idToken)
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    return ticket.getPayload();
  } catch (error) {
    console.log(error)
    throw new Error("Token verification failed");
  }
};
