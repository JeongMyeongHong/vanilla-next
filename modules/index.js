import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import counter, { counterSaga } from './basic/counter'
import auth, { registerSaga } from './auth/register'

const rootReducer = combineReducers({
    counter,
    auth
})
export function* rootSaga(){
    yield all([ counterSaga(), registerSaga()])
}
export default rootReducer