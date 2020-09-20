import {endpoints} from "services/api/endpoints";
import {http} from "services/http";

export interface IParamsSmth {

}

export const API = {
    FETCH_SMTH: (payload: IParamsSmth) => {
        return http.get(endpoints.FETCH_SMTH(payload))
    },
}
