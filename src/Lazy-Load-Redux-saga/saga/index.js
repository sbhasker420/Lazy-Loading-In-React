import { all } from "redux-saga/effects";

import fetchDataWatcher from "./fetchSaga";

export default function* rootsaga() {
  yield all([fetchDataWatcher()]);
}
