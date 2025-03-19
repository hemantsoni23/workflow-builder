import { registerUser, loginUser, googleLogin , testing} from "@/server/controllers/authControllers";

export async function POST(req) {
  return registerUser(req);
}

export async function PUT(req) {
  return loginUser(req);
}

export async function PATCH(req) {
  return googleLogin(req);
}

export async function GET(req) {
    return testing(req)

}
