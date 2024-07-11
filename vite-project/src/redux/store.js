import { configureStore } from "@reduxjs/toolkit";

import filterRedusers from "./reducers";

export const store = configureStore({
  reducer: {
    filter: filterRedusers,
  },
});
