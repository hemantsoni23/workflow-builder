import { registerUser} from "@/server/controllers/authControllers";

export async function POST(req) {
  return registerUser(req);
}