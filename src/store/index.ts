import { createStore, combineReducers } from "redux";
import createPostReducer from "./reducer/createPostReducer";
import dialogBoxReducer from "./reducer/dialogBoxReducer";
import paginationReducer from "./reducer/paginationReducer";
import userReducer from "./reducer/userReducer";



const rootReducer = combineReducers({
  users: userReducer,
  create: createPostReducer,
  pagination: paginationReducer,
  dialogBox: dialogBoxReducer
})

const store = createStore(rootReducer)

export default store