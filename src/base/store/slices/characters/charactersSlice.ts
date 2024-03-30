import { ICharacter, ISelectedCharacter } from '@/shared';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export type CharactersStateType = {
  data: {
    count: number,
    results: ICharacter[];
    previous: null | string;
    next: null | string;
  },
  isLoading: boolean;
  error: string | undefined;
  selectedCharacter: ISelectedCharacter | null;
};

const FETCH_URL = 'https://sw-api.starnavi.io/'

const initialState: CharactersStateType= {
  data: {
    previous: null,
    next: null,
    count: 0,
    results: [],
  },
  isLoading: false,
  error: undefined,
  selectedCharacter: null,
};

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async function (paginationProps: string = '', { rejectWithValue }) {
    try {
      return await fetch(`${FETCH_URL}/people${paginationProps}`).then((res) => {
        if (!res.ok) {
          throw new Error("Server Error!");
        }
        return res.json();
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("An unknown error occurred");
      }
    }
  }
);

export const fetchCharacterById = createAsyncThunk(
  "characters/fetchCharacterById",
  async function (characterId: string, { rejectWithValue }) {
    try {
      const selectedCharacterInfo = await fetch(`${FETCH_URL}/people/${characterId}`).then((res) => {
        if (!res.ok) {
          throw new Error("Server Error!");
        }
        return res.json();
      });

      const filmIds = selectedCharacterInfo.films;
      // using '__in' for multiple values
      const filmsData = await fetch(`${FETCH_URL}/films/?episode_id__in=${filmIds?.join(',')}`).then((res) => {
        if (!res.ok) {
          throw new Error("Server Error!");
        }
        return res.json();
      });

      // sort by character id
      const starshipsData = await fetch(`${FETCH_URL}/starships/?pilots=${characterId}`).then((res) => {
        if (!res.ok) {
          throw new Error("Server Error!");
        }
        return res.json();
      });

      return {
        info: selectedCharacterInfo,
        films: filmsData?.results || [],
        starships: starshipsData?.results || [],
      };
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("Server Error!");
      }
    }
  }
);

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchCharacters.rejected, (state, action) => {
      state.isLoading = false;
      state.data = { count: 0, results: [], previous: null, next: null };
      state.error = action.payload as string | undefined;
    });
    builder.addCase(fetchCharacterById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCharacterById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.selectedCharacter = action.payload;
      state.error = "";
    });
    builder.addCase(fetchCharacterById.rejected, (state, action) => {
      state.isLoading = false;
      state.selectedCharacter = null;
      state.error = action.payload as string | undefined;
    });
  },
});
export const charactersAction = charactersSlice.actions;

export default charactersSlice.reducer;
