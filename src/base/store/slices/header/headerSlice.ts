import {createSlice} from '@reduxjs/toolkit';

export type HeaderStateType = {
  isMenuOpen: boolean;
};

const initialState: HeaderStateType = {
  isMenuOpen: false,
};


export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    openMenu: (state) => {
      state.isMenuOpen = true;
    },
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});
export const headerAction = headerSlice.actions;

export default headerSlice.reducer;
