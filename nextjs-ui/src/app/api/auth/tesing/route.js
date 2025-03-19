import {  testing} from "@/server/controllers/authControllers";

export async function GET(req) {
    return testing(req)

}
