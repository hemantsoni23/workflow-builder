import googleClient from "@/server/config/googleConfig";

export const verifyToken = async (idToken) => {
  try {
    const ticket = await googleClient.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    return ticket.getPayload();
  } catch (error) {
    console.error("❌ Token verification failed:", error);
    throw new Error("Token verification failed");
  }
};
