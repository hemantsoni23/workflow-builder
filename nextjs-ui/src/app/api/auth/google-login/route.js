import { googleLogin } from "@/server/controllers/authControllers";


export async function POST(req) {
  return googleLogin(req);
}
