import googleClient from "@/server/config/googleConfig";

export const verifyGoogleToken = async (idToken) => {
  try {
    const ticket = await googleClient.verifyIdToken({
      idToken,
      audience: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    });

    return ticket.getPayload();
  } catch (error) {
    console.error("❌ Token verification failed:", error);
    throw new Error("Token verification failed");
  }
};
