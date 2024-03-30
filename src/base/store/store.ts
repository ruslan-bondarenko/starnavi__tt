import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

import {headerSlice, charactersSlice} from '@/base/store/slices';

const rootReducer = combineReducers({
  header: headerSlice,
  characters: charactersSlice
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

const initialValue = {
    header: {
      isMenuOpen: false,
    },
    characters: {
      data: {
        previous: null,
        next: null,
        count: 0,
        results: []
      },
      selectedCharacter: null,
      isLoading: false,
      error: undefined
    }
  }

export const createReduxStore = (initialState: RootState = initialValue) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    preloadedState: initialState
  });
}



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

