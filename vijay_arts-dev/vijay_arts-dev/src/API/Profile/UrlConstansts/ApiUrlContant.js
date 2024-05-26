import { Env } from "./EnvConstants";

const CurrentEnv = window.location.hostname

let baseUrl;

switch (CurrentEnv) {
    case "http://localhost:5173/":
        baseUrl = Env.local
        break;
    case "":
        baseUrl = Env.Dev
        break;
    default:
        baseUrl = Env?.local
        break;
}

export const Url = {
    


}