import { DECREMENT, INCREMENT } from "./action-type";

export const incrementCreator = (number) => ({ type: INCREMENT, data: number })
export const decrementCreator = (number) => ({ type: DECREMENT, data: number })