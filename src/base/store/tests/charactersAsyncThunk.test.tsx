import { fetchCharacters } from "../slices";
global.fetch = jest.fn();

describe("Characters Thunk", () => {
  it("should fetch with resolved response", async () => {
    const mockCharacters = {
      characters: {
        data: {
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
        },
        selectedCharacter: null,
        isLoading: false,
        error: "",
      },
    };

    (fetch as any).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockCharacters),
    });

    const dispatch = jest.fn();
    const thunk = fetchCharacters("10");

    await thunk(
      dispatch,
      () => ({}),
      () => {}
    );

    const { calls } = dispatch.mock;
    expect(calls).toHaveLength(2);

    const [start, end] = calls;

    expect(start[0].type).toBe("characters/fetchCharacters/pending");
    expect(end[0].type).toBe("characters/fetchCharacters/fulfilled");
    expect(end[0].payload).toBe(mockCharacters);
  });

  it("should fetch with rejected response", async () => {
    const dispatch = jest.fn();
    const thunk = fetchCharacters("");

    (fetch as any).mockResolvedValue({
      ok: false,
    });

    await thunk(
      dispatch,
      () => ({}),
      () => {}
    );

    const { calls } = dispatch.mock;
    expect(calls).toHaveLength(2);

    const [start, end] = calls;

    expect(start[0].type).toBe("characters/fetchCharacters/pending");
    expect(end[0].type).toBe("characters/fetchCharacters/rejected");
  });
});
