import { call, put, takeEvery } from "redux-saga/effects";

function* getProducts() {}

export function* Watchers() {
  yield takeEvery("GET_DATA", getProducts);
}
