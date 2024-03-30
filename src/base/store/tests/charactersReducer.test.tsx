import {
  charactersSlice,
  fetchCharacters,
  fetchCharacterById,
} from "../slices";

const initialState = {
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

describe("charactersSlice", () => {
  it("should change data with fetchCharacters.pending action", () => {
    const action = {
      type: fetchCharacters.pending.type,
    };

    const state = charactersSlice(initialState, action);
    expect(state.isLoading).toBe(true);
    expect(state.error).toBeUndefined();
  });

  it("should change data with fetchCharacters.fulfilled action", () => {
    const characters = {
      previous: null,
      next: "https://sw-api.starnavi.io/people/?page=2",
      count: 2,
      results: [
        {
          name: "Obi-Wan Kenobi",
          height: "182",
          mass: "77",
          hair_color: "auburn, white",
          skin_color: "fair",
          eye_color: "blue-gray",
          birth_year: "57BBY",
          gender: "male",
          homeworld: 20,
          films: [1, 2, 3, 4, 5, 6],
          species: [1],
          vehicles: [38],
          starships: [48, 59, 64, 65, 74],
          created: "2014-12-10T16:16:29.192000Z",
          edited: "2014-12-20T21:17:50.325000Z",
          url: "https://sw-api.starnavi.io/people/10/",
        },
        {
          name: "Wilhuff Tarkin",
          height: "180",
          mass: "unknown",
          hair_color: "auburn, grey",
          skin_color: "fair",
          eye_color: "blue",
          birth_year: "64BBY",
          gender: "male",
          homeworld: 21,
          films: [1, 6],
          species: [1],
          vehicles: [],
          starships: [],
          created: "2014-12-10T16:26:56.138000Z",
          edited: "2014-12-20T21:17:50.330000Z",
          url: "https://sw-api.starnavi.io/people/12/",
        },
      ],
    };

    const action = {
      type: fetchCharacters.fulfilled.type,
      payload: characters,
    };

    const state = charactersSlice(initialState, action);
    expect(state).toEqual({
      data: characters,
      isLoading: false,
      error: "",
      selectedCharacter: null,
    });
  });

  it("should change data with fetchCharacters.rejected action", () => {
    const action = {
      type: fetchCharacters.rejected.type,
      payload: "Server Error!",
    };

    const state = charactersSlice(initialState, action);
    expect(state).toEqual({
      data: {
        count: 0,
        next: null,
        previous: null,
        results: [],
      },
      isLoading: false,
      error: "Server Error!",
      selectedCharacter: null,
    });
  });

  it("should change data with fetchCharacterById.pending action", () => {
    const action = {
      type: fetchCharacterById.pending.type,
    };

    const state = charactersSlice(initialState, action);
    expect(state.isLoading).toBe(true);
    expect(state.error).toBeUndefined();
  });

  it("should change data with fetchCharacterById.fulfilled action", () => {
    const infoData = {
      info: {
        name: "Greedo",
        height: "173",
        mass: "74",
        hair_color: "n/a",
        skin_color: "green",
        eye_color: "black",
        birth_year: "44BBY",
        gender: "male",
        homeworld: 23,
        films: [1],
        species: [4],
        vehicles: [],
        starships: [],
        created: "2014-12-10T17:03:30.334000Z",
        edited: "2014-12-20T21:17:50.336000Z",
        url: "https://sw-api.starnavi.io/people/15/",
      },
      films: [
        {
          title: "The Phantom Menace",
          episode_id: 1,
          opening_crawl:
            "Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\nsystems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\nbattleships, the greedy Trade\r\nFederation has stopped all\r\nshipping to the small planet\r\nof Naboo.\r\n\r\nWhile the Congress of the\r\nRepublic endlessly debates\r\nthis alarming chain of events,\r\nthe Supreme Chancellor has\r\nsecretly dispatched two Jedi\r\nKnights, the guardians of\r\npeace and justice in the\r\ngalaxy, to settle the conflict....",
          director: "George Lucas",
          producer: "Rick McCallum",
          release_date: "1999-05-19",
          characters: [
            10, 16, 20, 21, 2, 3, 11, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
            42, 43, 44, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
          ],
          planets: [1, 8, 9],
          starships: [31, 32, 39, 40, 41],
          vehicles: [33, 34, 35, 36, 37, 38, 42],
          species: [
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 1, 2, 6, 22, 23, 24, 25,
            26, 27,
          ],
          created: "2014-12-19T16:52:55.740000Z",
          edited: "2014-12-20T10:54:07.216000Z",
          url: "https://sw-api.starnavi.io/films/4/",
        },
      ],
      starships: [],
    };

    const action = {
      type: fetchCharacterById.fulfilled.type,
      payload: infoData,
    };

    const state = charactersSlice(initialState, action);
    expect(state).toEqual({
      data: {
        count: 0,
        next: null,
        previous: null,
        results: [],
      },
      isLoading: false,
      error: "",
      selectedCharacter: infoData,
    });
  });

  it("should change data with fetchCharacterById.rejected action", () => {
    const action = {
      type: fetchCharacterById.rejected.type,
      payload: "Server Error!",
    };

    const state = charactersSlice(initialState, action);
    expect(state).toEqual({
      data: {
        count: 0,
        next: null,
        previous: null,
        results: [],
      },
      isLoading: false,
      error: "Server Error!",
      selectedCharacter: null,
    });
  });
});
