import { configureStore } from '@reduxjs/toolkit';

// Import slices here when you create them
// e.g., import uiReducer from './uiSlice';

export const store = configureStore({
  reducer: {
    // ui: uiReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
