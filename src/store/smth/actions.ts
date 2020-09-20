import { ISmth } from "./types";

const PRFX = "@@actors"

export const types = {
    GET_SMTH: `${PRFX}/GET_SMTH`,
    SAVE_SMTH: `${PRFX}/SAVE_SMTH`,
}

export const actions = {
    getSmth: () => ({ type: types.GET_SMTH }),
    saveSmth: (payload: ISmth[]): {} => ({ type: types.SAVE_SMTH, payload }),
}
