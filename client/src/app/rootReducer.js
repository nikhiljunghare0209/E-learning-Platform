import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import { authApi } from "@/features/api/authApi";
import { courseApi } from "@/features/api/courseApi";
import { purchaseApi } from "@/features/api/purchaseApi";
import { courseProgressApi } from "@/features/api/courseProgressApi";

// 1️⃣ What is a root reducer?
// A root reducer is the main reducer that combines all the individual reducers in a Redux store.
// It is created using combineReducers from Redux Toolkit.
// Each individual reducer manages its own slice of the state,
// and the root reducer combines them into a single state object for the entire application.

// “In a large project, there are many reducers.
// It is not possible or maintainable to put all reducer logic in a single file.
// So we define a rootReducer, where we define the path (key) of each reducer.
// At that path, the actual reducer logic is handled by the corresponding reducer file.”

const rootRedcuer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [courseApi.reducerPath]: courseApi.reducer,
  [purchaseApi.reducerPath]: purchaseApi.reducer,
  [courseProgressApi.reducerPath]: courseProgressApi.reducer,
  auth: authReducer,
});
export default rootRedcuer;
