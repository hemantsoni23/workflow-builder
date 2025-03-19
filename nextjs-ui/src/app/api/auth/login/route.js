import {  loginUser} from "@/server/controllers/authControllers";



export async function POST(req) {

  return loginUser(req);
}
