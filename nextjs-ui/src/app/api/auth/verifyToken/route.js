import { verifyToken } from "@/server/controllers/authControllers";

export async function POST(req) {
  return verifyToken(req);
}