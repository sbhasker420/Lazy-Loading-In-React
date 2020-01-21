import { createRoutine } from "redux-saga-routines";

export const fetchData$ = createRoutine("GET_DATA");

export const setData$ = createRoutine("SET_DATA");
