import { combineReducers } from "@reduxjs/toolkit";
import systemReducer from 'features/systems/systemSlice';

const rootReducer = combineReducers({
  systemReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
